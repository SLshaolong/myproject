<template>
  <div class="tunnel-container">
    <div class="tunnel-list">
      <h3>选择断面</h3>
      <el-tree :load="loadNode" :props="defaultProps" lazy @node-click="handleNodeClick" />
    </div>
    <div class="tunnel-content">
      <el-table :data="tunnelData.data">
        <el-table-column label="序号" prop="id" width="180"></el-table-column>
        <el-table-column label="隧道名称" prop="tunnelname"></el-table-column>
        <el-table-column label="图片名称" prop="imagename"></el-table-column>
        <el-table-column label="隧道编号" prop="num"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="danger" @click="previewHandle(scope.row)">预览</el-button>
            <el-button type="success" @click="updateHandle(scope.row)">上传</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog destroy-on-close v-model="dialogUploadVisible" title="上传文件" width="30%">
    <el-upload v-model:file-list="fileList" action="http://localhost:3000/project/upload" class="upload"
      :on-success="successUpload" :limit="1">
      <el-button type="primary">点击上传</el-button>
    </el-upload>
    <template #footer>


      <el-button @click="dialogUploadVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogUploadVisible = false">
        关闭
      </el-button>

    </template>
  </el-dialog>
</template>
<script lang='ts' setup>

import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import api from '../../api'
import {useRouter} from 'vue-router'
const router=useRouter()
interface tunnel {
  id: number | string
  tunnelname: string,
  imagename: string,
  num: string,
  content: string
}
const fileList = ref([])
const tunnelData = reactive({
  data: []
})
const uploadId = ref(<number>0)
const dialogUploadVisible = ref(<boolean>false)
const defaultProps = {
  children: 'children',
  label: 'name'
}
const handleNodeClick = async (data: any) => {
  if (data.content) {
    const result: any = await api.getContentData({ content: data.content })
    if (result.status == 200) {
      tunnelData.data = result.result
    }

  } else {
    tunnelData.data = []
  }

}
const loadNode = async (node: any, resolve: any) => {
  if (node.level === 0) {
    const result: any = await api.getTree()
    if (result.status == 200) {

      return resolve(result.result)
    } else {
      return resolve([])
    }
  }
  else if (node.level == 1) {
    const result: any = await api.getTreeChild({ cid: node.data.cid })
    if (result.status == 200) {
      return resolve(result.result)
    } else {
      return resolve([])
    }
  } else {
    return resolve([])
  }
}


const previewHandle = async (row: any) => {
  router.push('/pdf/'+row.id)

}


const updateHandle = async (row: any) => {
  dialogUploadVisible.value = true
  uploadId.value = row.id

}

const successUpload = async (response: any, uploadFile: any) => {
  const result: any = await api.uploadContentUrl({ id: uploadId.value, urlName: response.url.substr(7) })
  if (result.status == 200) {
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
</script>
<style scoped lang="less">
.tunnel-container {
  display: flex;

  .tunnel-list {
    width: 250px;
    background: #fff;
    padding: 10px;
    margin-right: 20px;

    h3 {
      font-size: 15px;
      font-weight: 700;
      margin: 10px 0;
    }
  }

  .tunnel-content {
    flex: 1;
  }

  .upload {
    display: inline-block;
    padding-top: 1px;
    margin-left: 10px;
  }
}
</style>