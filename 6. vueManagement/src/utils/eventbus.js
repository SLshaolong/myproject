import vue from 'vue'
const eventBus=new vue();
Object.defineProperties(vue.prototype,{
    $bus:{
        get(){
            return eventBus
        }
    }
})