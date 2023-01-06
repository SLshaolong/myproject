<template>
<iframe :src="pdfSrc" frameborder="0" class="ifarm" ></iframe>
</template>
<script lang='ts' setup>
import {useRoute} from 'vue-router'
import {onMounted,ref} from 'vue';
import api from '../../../api';
const route=useRoute()
const pdfSrc=ref(<string>'')
const {id}=route.params
onMounted( async ()=>{
    const result:any=await api.getPdfData({id})
    if(result.status==200){
        pdfSrc.value='http://localhost:3000/'+result.result.url
        console.log(pdfSrc.value);
        
    }
    
})

</script>
<style scoped>
.ifarm{
    width: 100%;
    height: 100%;
}
</style>