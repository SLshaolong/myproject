<template>
  <div class="search">
    <span>用户信息</span>
    <el-input class="input" v-model="searchInfo" size="large" placeholder="请输入要查询的信息"
      @keyup.enter="searchHandle"></el-input>
    <el-button size="large" type="primary" plain class="button" @click="searchHandle">搜索</el-button>
    <el-button size="large" type="primary" plain class="button" @click="dialogAddVisible = true">添加</el-button>
  </div>
  <el-table :data="alldata.userData">
    <el-table-column label="id" prop="id" width="50"></el-table-column>
    <el-table-column label="用户名" prop="username" width="150"></el-table-column>
    <el-table-column label="权限" prop="permission" width="120">
      <template #default="scope">
        <div>{{ scope.row.permission == 'admin' ? '管理员' : 'VIP用户' }}</div>
      </template>
    </el-table-column>
    <el-table-column label="手机号" prop="phone" width="200"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <div v-if="userStore.username != scope.row.username && userStore.permission == 'admin'">
          <el-button circle :icon="Edit" type="success" @click="EditHandle(scope.row)"
           ></el-button>
          <el-button circle :icon="Delete" type="danger" 
            @click="deleteHandle(scope.row.id)"></el-button>
        </div>
        <div v-else>权限不足</div>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog width="30%" destroy-on-close v-model="dialogAddVisible" title="添加用户" center>
    <el-form :model="alldata.addData">
      <el-form-item label="用户名">
        <el-input v-model="alldata.addData.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密  码">
        <el-input v-model="alldata.addData.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="权  限">
        <el-input v-model="alldata.addData.permission" placeholder="0表示管理员 1表示vip" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="alldata.addData.phone" placeholder="请输入手机号" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogAddHandle">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog width="30%" destroy-on-close v-model="dialogEditVisible" title="修改数据" center>
    <el-form :model="alldata.editData">
      <el-form-item label="用户名">
        <el-input v-model="alldata.editData.username" />
      </el-form-item>
      <el-form-item label="密  码">
        <el-input v-model="alldata.editData.password" />
      </el-form-item>
      <el-form-item label="权  限">
        <el-input v-model="alldata.editData.permission" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="alldata.editData.phone" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogEditHandle">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang='ts' setup>
import { reactive, ref, onMounted } from 'vue'
import api from '../../api'
import { Edit, Delete } from '@element-plus/icons-vue'
import { userLoginStore } from '../../stores/loginStore';
import { ElMessage, ElMessageBox } from 'element-plus';

const userStore = userLoginStore()
const searchInfo = ref(<string>'')
const dialogAddVisible = ref(<boolean>false)
const dialogEditVisible = ref(<boolean>false)
const alldata = reactive({
  userData: [],
  addData: <any>{
    username: '',
    password: '',
    phone: '',
    permission: ''
  },
  editData: <any>{
    username: '',
    password: '',
    phone: '',
    permission: ''
  }
})
const editId = ref(0)

const http = async () => {
  const result: any = await api.getAllUserData()
  if (result.status == 200) {
    alldata.userData = result.result

  }
}
onMounted(() => {
  http()
})
const searchHandle = async () => {
  const result: any = await api.getDimUser({
    keyword: searchInfo.value
  })
  if (result.status == 200) {
    alldata.userData = result.result
  }

}
const EditHandle = async (row: any) => {
  editId.value = row.id
  dialogEditVisible.value = true
  const result: any = await api.getBeforeUpdateUserData({ id: row.id })
  if (result.status == 200) {
    alldata.editData.username = result.result.username
    alldata.editData.password = result.result.password
    alldata.editData.permission = result.result.permission == 'admin' ? '0' : '1'
    alldata.editData.phone = result.result.phone
  }
}
const dialogAddHandle = async () => {
  const { username, password, phone, permission } = alldata.addData
  if (username && password && phone && permission) {
    const result: any = await api.putAddUserData({
      username, password, phone, permission: permission == '0' ? 'admin' : 'vip'
    })
    if (result.status == 200) {
      dialogAddVisible.value = false
      http()
      ElMessage({
        type: 'success',
        message: result.msg
      })
      for (let i in alldata.addData) {
        alldata.addData[i] = ''
      }

    } else {
      ElMessage({
        type: 'error',
        message: result.msg
      })
    }
  }


}
const dialogEditHandle = async () => {
  const { username, password, phone, permission } = alldata.editData
  const result: any = await api.putUpdateUserDate({
    username,
    password,
    phone,
    id: editId.value,
    permission: permission == '0' ? 'admin' : 'vip'
  })
  if (result.status == 200) {
    dialogEditVisible.value = false
    http()
    ElMessage({
      type: 'success',
      message: result.msg
    })
  } else {
    ElMessage({
      type: 'error',
      message: result.msg
    })
  }
}
const deleteHandle = (id: string) => {
  ElMessageBox.confirm(
    '是否确认删除',
    '警告操作',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      const result: any = await api.putDeleteUserData({ id })
      if (result.status == 200) {
        http()
        ElMessage({
          type: 'success',
          message: result.msg
        })
      } else {
        ElMessage({
          type: 'error',
          message: result.msg
        })
      }

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消操作',
      })
    })

}
</script>
<style scoped lang="less">
.search {
  margin-top: 10px;
  box-sizing: border-box;
  background: #fff;
  padding: 10px;

  span {
    font-weight: 600;
  }

  .input {
    width: 30%;
    padding: 0 20px;
  }
}
</style>