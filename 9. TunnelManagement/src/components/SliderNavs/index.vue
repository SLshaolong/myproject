<template>
  <div class="slider-navs" :style="{width:menustore.isCollapse?'64px':'210px'}">
    <div class="logo" v-show="systemstore.toggle" >{{!menustore.isCollapse?"隧道工程项目":"隧道"}}</div>
    <el-menu
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="active"
        router
        class="el-menu-vertical-demo"
        :collapse="menustore.isCollapse"
    >
        <template v-for="(item,index) in menustore.menus" :key="index">
            <el-sub-menu v-if="item.children" :index="item.path">
                <template #title>
                    <component :is="item.icon" class="icon"></component>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item  :index=childrenitem.path v-for="(childrenitem,childindex) in item.children" :key="childindex">
                <span>{{childrenitem.name}}</span>
            </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index=item.path >
                <component :is="item.icon" class="icon"></component>
                <span>{{item.name}}</span>
            </el-menu-item>
        </template>
          
      
        
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {MenuStore} from '../../stores/MenuStore'
import {useSystem} from '../../stores/SystemStore'
const systemstore=useSystem()
const menustore=MenuStore()
const active=ref("/")
if(localStorage.getItem("active"))
{
    active.value=localStorage.getItem("active")||'/';
}
</script>

<style scoped>
.slider-navs{
position: fixed;
left: 0;
top: 0;
bottom: 0;
width: 210px;
background: #304156;
transition: all 0.3s ease-in;
}
.logo{
    width: 100%;
    height: 60px;
    background: #364e6d;
    font-size: 25px;
    color: #fff;
    line-height: 60px;
    text-align: center;
}
/* .el-menu-vertical-demo{

} */
.icon{
    width: 16px;
    height: 16px;
    margin-right: 5px ;
}
</style>