### 个人博客后台系统

# 登录页面 默认的地址/admin/login 必须要有登录 防止不法分子
1. 路由 react-router-dom
2. 存储状态 redux =>localstorage

# 默认账号密码登录 无
1. 默认账号 admin 密码前端发送jwt
2. 如果有数据再次访问/admin/login 默认跳转/admin

# 页面布局
1. 左侧菜单栏 使用antd? 或者自己手写
    1. 个人介绍
    2. 项目介绍
2. 右侧布局栏
    1. 个人介绍修改 使用富文本编译器
    2. 项目介绍支持增删改

## 使用的第三方库
1. antd antdicon
2. braft-editor
3. redux
4. axios
5. braft-editor

 添加已完成  修改 然后写网络请求获取数据 之后传递 利用props结构 使用函数返回