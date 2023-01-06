<template>
<div class="container">
    <div class="title">404 NotFound</div>
    <div class="desc">this page is not found please change router</div>
    <div class="link"><router-link to="/">Back Home</router-link></div>
</div>
</template>
<script lang='ts' setup>

</script>
<style scoped>
.container{
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    text-align: center;
}
.title{
    font-size: 36px;
    padding-top: 50px;
    font-weight: 600;
    color: #000;
}
.desc{
    font-size: 16px;
    margin-top: 50px;

}
.link a{
    margin-top: 50px;
    color: #ff0000;
}
.link{
    margin-top: 50px;
    font-size: 18px;
}
</style>