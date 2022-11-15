<template>
  <div class="header">
    <h3>新型冠状病毒肺炎</h3>
    <h1>疫情实时动态</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.header{
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 33.3%;
    background-size:100% ;
    color: #fff;
    font-size: 0.28rem;
    text-align: center;
    background-image: url(../assets/header-top.png);
    
    h1{
        font-size: 30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 1rem;
        
    }
    h3{
        font-size: 22px;
        position: absolute;
        left: 1rem;
        top: 1.75rem;
        background-color: rgb(5, 49, 127);
        padding: 5px;
        border-radius: 20px;
    }
}

</style>