<template>
  <div class="search">
    <span>项目状态</span>
    <el-input class="input" v-model="searchInfo" size="large" placeholder="请输入要查询的信息"
      @keyup.enter="searchHandle"></el-input>
    <el-button size="large" type="primary" plain class="button" @click="searchHandle">搜索</el-button>
    <el-button size="large" type="primary" plain class="button" @click="dialogAddVisible = true">添加</el-button>
  </div>
  <el-table :data="tableData.list" style="width:100%" :header-cell-style="headerclass">
    <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
    <el-table-column prop="number" label="项目编码" width="100"></el-table-column>
    <el-table-column prop="money" label="项目金额" width="120"></el-table-column>
    <el-table-column prop="adress" label="项目地址" width="120"></el-table-column>
    <el-table-column prop="duration" label="项目工期(月)" width="120"></el-table-column>
    <el-table-column prop="startTime" label="开工时间" width="150"
      :formatter="value => dateFormart(Number(value.startTime))"></el-table-column>
    <el-table-column prop="endTime" label="终止时间" width="150"
      :formatter="value => dateFormart(Number(value.endTime))"></el-table-column>
    <el-table-column prop="quantity" label="隧道数量" width="80"></el-table-column>
    <el-table-column prop="status" label="项目状态" width="120">
      <template #default="scope">
        <el-tag :type="scope.row.status == 1 ? '' : 'success'">{{ scope.row.status == 1 ? '施工中' : '已完工' }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="remark" label="备注" show-overflow-tooltip>
      <template #default="scope">
        <div v-html="scope.row.remark"></div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template #default="scope">
        <el-button size="small" @click="handleEdite(scope.row.id)" :icon="Edit" circle type="primary"></el-button>
        <el-button size="small" @click="handleDelet(scope.row.id)" :icon="Delete" circle type="danger"></el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination class="pagination" background layout="prev,pager,next" :total="alltotal" @current-change="changeHandle"
    :default-page-size="15"></el-pagination>

  <el-dialog v-model="dialogAddVisible" title="添加隧道信息" width="45%" center>
    <el-form :inline="true" :model="addFrom">
      <el-form-item label="项目名称">
        <el-input v-model="addFrom.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="项目编码">
        <el-input v-model="addFrom.number" placeholder="请输入编码"></el-input>
      </el-form-item>
      <el-form-item label="项目金额">
        <el-input v-model="addFrom.money" placeholder="请输入金额"></el-input>
      </el-form-item>
      <el-form-item label="项目地址">
        <el-input v-model="addFrom.address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="项目工期">
        <el-input v-model="addFrom.duration" placeholder="请输入工期"></el-input>
      </el-form-item>
      <el-form-item label="开工时间">
        <el-date-picker v-model="addFrom.startTime" placeholder="请输入时间" type="date" value-format="x"></el-date-picker>
      </el-form-item>
      <el-form-item label="终止时间">
        <el-date-picker v-model="addFrom.endTime" placeholder="请输入时间" type="date" value-format="x"></el-date-picker>
      </el-form-item>
      <el-form-item label="隧道数量">
        <el-input v-model="addFrom.quantity" placeholder="请输入数量"></el-input>
      </el-form-item>
      <el-form-item label="项目状态">
        <el-input v-model="addFrom.status" placeholder="'1'施工中-'0'已完成"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="addFrom.remark" placeholder="备注"></el-input>
      </el-form-item>
    </el-form>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogAddHandle">
          添加
        </el-button>
      </span>
    </template>

  </el-dialog>
  <el-dialog v-model="editDialogVisible" title="修改隧道信息" width="45%" center :id="id">
    <el-form :inline="true" :model="editFrom">
      <el-form-item label="项目名称">
        <el-input v-model="editFrom.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="项目编码">
        <el-input v-model="editFrom.number" placeholder="请输入编码"></el-input>
      </el-form-item>
      <el-form-item label="项目金额">
        <el-input v-model="editFrom.money" placeholder="请输入金额"></el-input>
      </el-form-item>
      <el-form-item label="项目地址">
        <el-input v-model="editFrom.address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="项目工期">
        <el-input v-model="editFrom.duration" placeholder="请输入工期"></el-input>
      </el-form-item>
      <el-form-item label="开工时间">
        <el-date-picker v-model="editFrom.startTime" placeholder="请输入时间" type="date" value-format="x"></el-date-picker>
      </el-form-item>
      <el-form-item label="终止时间">
        <el-date-picker v-model="editFrom.endTime" placeholder="请输入时间" type="date" value-format="x"></el-date-picker>
      </el-form-item>
      <el-form-item label="隧道数量">
        <el-input v-model="editFrom.quantity" placeholder="请输入数量"></el-input>
      </el-form-item>
      <el-form-item label="项目状态">
        <el-input v-model="editFrom.status" placeholder="'1'施工中-'0'已完成"></el-input>
      </el-form-item> <br>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="editFrom.remark" placeholder="备注" style="width:500px"></el-input>
      </el-form-item>
    </el-form>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="changeThisHandle">
          修改
        </el-button>
      </span>
    </template>

  </el-dialog>
</template>
<script  setup lang="ts">
import api from '../../api';
import { onMounted, reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { dateFormart } from '../../utils/utils'
import { Edit, Delete } from '@element-plus/icons-vue'
const tableData = reactive({
  list: []
})
const id = ref(<number>0)
interface formAdd {
  name: string,
  number: number | string,
  money: string,
  address: string,
  duration: string | number,
  startTime: string,
  endTime: string,
  quantity: string | number,
  status: string | number,
  remark: string

}

const addFrom = reactive(<formAdd>{
  name: '',
  number: '',
  money: '',
  address: '',
  duration: '',
  startTime: '',
  endTime: '',
  status: '',
  quantity: '',
  remark: ''

})
const editFrom = reactive(<formAdd>{
  name: '',
  number: '',
  money: '',
  address: '',
  duration: '',
  startTime: '',
  endTime: '',
  status: '',
  quantity: '',
  remark: ''
})
const searchInfo = ref('')
const alltotal = ref(0)
const dialogAddVisible = ref(<boolean>false)
const editDialogVisible = ref(<boolean>false)
onMounted(() => {
  http(1)
  getallPage()
})
const http = async (page: number) => {
  const res: any = await api.getallProject({ page })
  if (res.status == 200) {
    tableData.list = res.result
  }
}
const headerclass = (): any => {
  return {
    background: '#dcdcdc',
    color: '#999',
    fontWeight: 700
  }
}
const handleEdite = (num: number): void => {
  id.value = num
  editDialogVisible.value = true
  /**
   * 预更新
   */
  beforeUpdate(num)

}
const handleDelet = (id: number): void => {
  ElMessageBox.confirm('你将删除这条数据', '警告', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const result: any = await api.deleteFromData({ id })

    if (result.status == 200) {
      ElMessage({
        type: 'success',
        message: result.msg,
      })
      http(1)
    } else {
      ElMessage({
        type: 'error',
        message: result.msg,
      })
    }

  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '你取消了操作',
    })
  })

}
const searchHandle = async (): Promise<void> => {
  const res: any = await api.getSearchInfo({ search: searchInfo.value })
  if (res.status == 200) {
    tableData.list = res.result
  }

}
const getallPage = async (): Promise<void> => {
  const result: any = await api.getAllPage()
  if (result.status == 200) {
    alltotal.value = result.count
  }
}
const changeHandle = (page: number): void => {
  http(page)

}
const dialogAddHandle = async (): Promise<void> => {
  /**
   * 添加接口
   */
  if (addFrom) {
    const { address, duration, endTime, startTime, money, name, number, quantity, remark, status } = addFrom
    const result: any = await api.addFromData({ address, duration, endTime, startTime, money, name, number, quantity, remark, status })
    if (result.status == 200) {
      dialogAddVisible.value = false;
      for (let i in addFrom) {
        addFrom[i] = ''
      }
      http(1)
      ElMessage({
        message: result.msg,
        type: 'success',
      })
    } else {
      ElMessage({
        message: result.msg,
        type: 'error',
      })
    }
  }
}
const changeThisHandle = async (): Promise<void> => {
  console.log(id.value);
  const { address, duration, endTime, startTime, money, name, number, quantity, remark, status } = editFrom
  const data = {
    id: id.value,
    address, duration, endTime: Date.parse(new Date(endTime).toString()), startTime:Date.parse(new Date(startTime).toString()), money, name, number, quantity, remark, status
  }
  const result: any = await api.UpdateData(data)
  if(result.status==200){
    editDialogVisible.value=false
    ElMessage({
      type:'success',
      message:result.msg
    })
    http(1)
  }else{
    ElMessage({
      type:'error',
      message:result.msg
    })
  }

}
const beforeUpdate = async (id: number): Promise<void> => {
  const result: any = await api.getBeforeUpdateData({ id })
  if (result.status == 200) {

    const { id, adress, duration, endTime, money, name, number, quantity, remark, startTime, status } = result.result[0]
    editFrom.address = adress
    editFrom.duration = duration
    editFrom.endTime = dateFormart(Number(endTime))
    editFrom.name = name
    editFrom.money = money
    editFrom.number = number
    editFrom.quantity = quantity
    editFrom.remark = remark
    editFrom.startTime = dateFormart(Number(startTime))
    editFrom.status = status


  }

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

.pagination {
  text-align: center;
  margin: 10px auto 0;
  position: fixed;
  right: 10px;
  bottom: 20px;
}
</style>