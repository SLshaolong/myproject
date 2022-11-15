
<script>
export default {
  name: 'Contents',
  render() {
    return (
      <div>
        {
          this.pans.map((ele, index) => {
            return <div style={{ display: ele.isActive ? 'block' : 'none' }}> {ele.$slots.default} </div>
          })
        }
      </div>
    )
  },
  props: {
    pans: {
      trpe: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>