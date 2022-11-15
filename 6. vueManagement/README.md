# ego后台商城管理系统
 商品管理 规格管理 广告分类管理等
 用户注册 等...
 国际化

 # 安装的依赖
 axios
 集成element ui

## 实现登录界面的 login.vue
1. 用到的组件 
    el-card el-tabs el-form
2. 具体功能
    1. 登录
        1. 完成网络请求的处理
            1. 封装axios完成post请求数据的聚合
        2. 解决跨越问题
            1. 前端解决: proxy代理解决
            2. 后端解决: cors方案 `npm install --save cors`
    2. 注册
        1. 注册信息验证
        2. 网络请求交互
        3. elementUI组件 消息提示

## 实现后台服务器提供接口
Node+Mysql 
1. 安装依赖
    1. express框架 `npm install --save express`
    2. mysql库 `npm install --save mysql`
        

## 前后端同时运行服务器
1. 安装依赖 `npm install -g concurrently`
2. package.json:`"dev":"concurrently \"npm run serve\" \"node index.js\""`
3. 运行 `npm run dev`
4. node服务器的重启 `npm install -g nodemon`


## 路由权限管理
    验证用户是否登录

## 用户登录的验证
1. Vuex管理用户登陆状态
2. token用户凭证
    前端发送用户名密码-> 后台验证用户名密码是否正确(生成token) ->返回token用户凭证 

## 实现导航
1. 主导航
    1. 使用到的ElementUI组件
        1. NavMenu 导航菜单 ：额外配置的router
        2. Icon图标
2. 顶部导航
    1. 使用的ElementUI组件
        1. Icon图标
        2. 下拉菜单
    2. 用户名处理
        1. 解析token 
            1. 安装依赖 `npm install --save jwt-decode`
        2. 用户名和token存入到vuex和本地中 (转码)
    3. 退出处理
        1. 清楚本地数据和vuex数据

## 商品管理
1. 使用的ElementUI组件
    1. table表格

## 分页功能
1. 使用的ElementUI组件
    1. Pagination 分页
2. 组件之间的数据交互
    1. 子父级：prop 自定义事件
    2. 同级组件： vuex eventBus

## 模糊搜索
1. form表单阻止默认事件
2. 监听回车事件

## 国际语言
1. vue-il8n
2. 安装依赖  `yarn add vue-i18n --save`

## 添加功能的实现
1. 富文本编译器 `https://github.com/haochuan9421/vue-ueditor-wrap/tree/2.x`

## 修改数据的实现
1. 数据的预更新 ：修改数据的时候，从服务器读取别人的数据  


## 规格参数
