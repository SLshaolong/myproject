<template>
  <div class="box">
    <van-form @submit="onSubmit" label-width="3em" background="transparent">
      <van-cell-group inset>
        <van-field v-model="time" name="time" label="时间" readonly />
        <van-field v-model="title" name="title" label="标题" required error />
        <van-field v-model="desc" name="desc" rows="10" autosize label="描述" type="textarea" error required />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import api from '../../api'
import { UserStore } from '../../store/index'
import { Toast } from 'vant';
import 'vant/es/toast/style';

export default {
  props: {
    cid: String
  },
  setup(props, ctx) {
    const time = ref("")
    const desc = ref('')
    const store = UserStore()
    const title = ref("")
    const cid = props.cid;
    const router = useRouter()
    const BackHome = () => {
      router.push('/params/home')
    }
    const onSubmit = (values) => {
      if (values.title = "" || values.desc == "") {
        Toast("请填写每项数据")
      } else {
        api.InSert({
          id: store.id,
          time: values.time,
          desc: values.desc,
          title: title.value
        }).then(res => res.data).then(data => {
          if (data.status == 200) {
            Toast.success("添加成功")
            router.push({
              name: 'Home'
            })
          } else {
            Toast.fail("添加失败")
          }
        })
      }
    }
    const GetTime = () => {
      let now = new Date();
      let year = now.getFullYear();
      let mouth = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1)
      let day = now.getDate() >= 10 ? now.getDate() : '0' + (now.getDate())
      time.value = `${year}年${mouth}月${day}日`
    }

    return {
      BackHome,
      time,
      title,
      onSubmit,
      desc,
      GetTime
    }
  },
  mounted() {
    this.GetTime()
  }
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/images/Add.png);
  background-size: 100%;
  background-position: bottom;
}

.van-cell-group {
  background: transparent;
}

.van-field {
  margin-top: 20px;
  border-radius: 8px;
  background: rgba(246, 246, 246, 0.85);
  color: #fff;
}
</style>