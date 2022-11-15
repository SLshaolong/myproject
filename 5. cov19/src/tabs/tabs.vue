
<script>
import Content from './Contents.vue'

export default {
    name: 'tabs',
    components: {
        Content
    },
    data(){
        return{
            pans:[]
        }
    },
    render() {
        return (
            <div>
                <ul class='tabs-header' >{this.$slots.default}</ul>
                <Content pans={this.pans}/>
            </div>
        )
    },
    props: {
        currentIndex: {
            type: [Number, String],
            default: 1
        },
    },
    methods: {
        getIndex(index) {
            this.$emit("getindex", index)
        }
    }
}
</script>

<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>