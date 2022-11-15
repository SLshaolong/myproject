import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages={
  en:{
    message:{
      project:'project',
      params:'params',
      content:'content',
      select:'select',
      add:'add',
      ucenter:'ucenter',
      exit:'exit'
    }
  },
  zh:{
    message:{
      project:'商品管理',
      params:'规格参数',
      content:'广告分类',
      select:'查询',
      add:'添加',
      ucenter:'个人中心',
      exit:'退出'
    }
  }
}

const i18n  =new VueI18n({
  locale:'zh',
  messages
})

export default i18n 