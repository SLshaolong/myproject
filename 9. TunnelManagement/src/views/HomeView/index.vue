<template>
  <div class="card">
    <div class="box">
      <el-icon class="box-icon">
        <Odometer />
      </el-icon>
      <span class="box-title" >隧道数量：1000个</span>
    </div>
    <div class="box">
      <el-icon class="box-icon" style="color:#36a3f7">
        <Check />
      </el-icon>
      <span class="box-title" >检验合格：605个</span>
    </div>
    <div class="box">
      <el-icon class="box-icon" style="color:#f4516c">
        <Loading />
      </el-icon>
      <span class="box-title" >正在施工：30个</span>
    </div>
    <div class="box">
      <el-icon class="box-icon" style="color:#34bfa3">
        <MessageBox />
      </el-icon>
      <span class="box-title" >地质预报：2000个</span>
    </div>
    
  </div>
  <div class="line" id="line"></div>
  <div class="allbox">
    <div class="content" id="leida">

    </div>
    <div class="content" id="bing">

    </div>
    <div class="content" id="zhu">

    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance,onMounted} from 'vue'
import api from '../../api'
const {proxy} =getCurrentInstance()
onMounted(()=>{
  api.getLineData().then(res=>{
    if(res.status==200){
      proxy.$line('line',res.lineDate.lines)

    }
  })
  proxy.$leida('leida')
  proxy.$zhu('zhu')
  proxy.$bing('bing')
})
</script>

<style scoped lang="less">
.card{
  display: flex;
  .box{
    flex: 1;
    height: 130px;
    margin: 20px;
    padding: 20px;
    background: #fff ;
    &:nth-child(1){
      margin-left: 0;
    }
    &:nth-child(4){
      margin-right: 0;
    }
  }
  .box-icon{
    display: block;
    font-size: 60px;
    color: #40c9c6;
    line-height: 130px;
    float: left;
  }
  .box-title{
    display: block;
    font-size: 20px;
    color: #666;
    float: right;
    line-height: 130px;
  }
}
.line{
  width: 100%;
  height: 300px;
  background: #fff;
}
.allbox{
  display: flex;
  .content{
    flex: 1;
    height: 450px;
    margin: 20px;
    padding: 10px;
    background: #fff;
    &:nth-child(1){
      margin-left: 0;
    }
    &:nth-child(3){
      margin-right: 0;
    }
  }
}
</style>