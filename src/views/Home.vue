<template>
  <el-container v-loading="loading">
    <el-header style="width: 100%; text-align: center;">
      <el-link href="https://github.com/kriscarilloxyz/nethunt-vue">
        <i class="el-icon-star-on"></i> Github
      </el-link>
      <el-link style="margin-left: 15px;"
               href="https://github.com/kriscarilloxyz">
        @kriscarilloxyz
      </el-link>
    </el-header>
    <el-main v-if="!client"
             style="
                  width: 520px;
                  max-width: 100%;
                  padding: 160px 35px 0;
                  margin: 0 auto;
                  overflow: hidden;
  ">
      <h1>Login</h1>
      <el-form>
        <el-form-item label="Username">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="API Key">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-button type="primary"
                   @click="handleAuthenticate">
          Authenticate
        </el-button>
      </el-form>
    </el-main>
    <el-main v-else>
      <el-row>
        <el-col :span="24"
                :md="4">
          <el-menu>
            <el-menu-item v-for="folder in readableFolder"
                          @click="readableFolderChange(folder.id)"
                          :key="folder.id">
              <i class="el-icon-menu"></i>
              <span>{{folder.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="24"
                :md="20">
          <el-main>
            <el-pagination layout="prev, pager, next"
                           :total="paginationTotal"
                           :current-page.sync="pagination"
                           style="margin-bottom: 5px; text-align: right;">
            </el-pagination>

            <el-table :data="tableData "
                      v-loading="tableLoading">
              <el-table-column v-for="field in folderField"
                               :key="field.name"
                               :prop="field.name"
                               :label="field.name">
              </el-table-column>
            </el-table>
          </el-main>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Nethunt from '@kriscarilloxyz/nethunt-js'

export default {
  name: 'Home',
  data: () => ({
    loading: false,
    username: '',
    password: '',
    client: false,
    readableFolder: [],
    folderField: [],
    records: [],
    checkList: [],
    tableLoading: false,
    pagination: 0,
    searchInput: ''
  }),
  mounted () { this.handleAuthenticate() },
  computed: {
    paginationTotal () {
      return this.records.length
    },

    tableData () {
      const end = this.pagination * 10 || 10
      const start = this.pagination !== 1 ? end - 10 : 0
      const records = this.records
      return records
        .splice(start, 10)
    }
  },
  methods: {
    async handleAuthenticate () {
      this.loading = true
      try {
        const client = new Nethunt(this.username, this.password)
        await client.authTest()
          .then(response => {
            const { user } = response[0]
            this.$message({ message: `You are logged in as ${user.personalName}.`, type: 'success' })
            // Store client
            this.client = client
            this.handleUpdate()
          })
          .catch(err => this.handle(err))
        this.loading = false
      } catch (error) {
        this.handle(error)
        this.loading = false
      }
    },

    async handleUpdate () {
      this.readableFolderGet()
    },

    async readableFolderGet () {
      await this.client.readableFolder()
        .then(res => { this.readableFolder = res })
        .catch(err => this.handle(err))
    },

    async readableFolderChange (folderId) {
      this.folderFieldGet(folderId)
      this.findRecord(folderId)
    },

    async folderFieldGet (folderId) {
      await this.client.folderField(folderId)
        .then(res => { this.folderField = res })
        .catch(err => this.handle(err))
    },

    async findRecord (folderId) {
      this.tableLoading = true
      await this.client.findRecord(folderId, {
        created: '"from 1 jan 2019 to today"',
        limit: 9999
      })
        .then(res => { this.records = res.map(r => r.fields) })
        .catch(err => this.handle(err))

      this.tableLoading = false
    },

    handle (error) {
      this.$message({ message: error, type: 'error' })
    }
  }
}
</script>
