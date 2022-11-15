
<script>
import api from '../api/index'
import Vue from 'vue'
export default {
    props: ['label', 'index'],
    name: 'tab',
    render() {
        let classname = {
            tab: true,
            active: this.isActive
        }
        return (
            <li class={classname} onClick={this.clickItemHandle}>
                {this.label}
            </li>
        )
    },
    computed: {
        isActive() {
            return this.$parent.currentIndex == this.index
        }
    },
    methods: {
        clickItemHandle() {
            this.$parent.getIndex(this.index)
            if (this.index == 2) {
                api.getNcov19().then(res => {
                    
                    
                    return res.data.areaTree
                }).then(data=>{
                    const alldata=[]
                    for(let i=0;i<data.length;i++)
                    {
                        const dirt={}
                        dirt.name=data[i].name
                        dirt.value=data[i].today.confirm
                        alldata.push(dirt)
                    }
                    Vue.nextTick(() => {
                        this.$charts.worldMap("worldmap",alldata)
                    })
                })
            }
        }
    }, mounted() {
        this.$parent.pans.push(this)
    }
}
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue
}
</style>