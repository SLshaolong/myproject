<template>
  <div>
    <el-tag :key="index" v-for=" (tag,index) in dynamicTags" closable :disable-transitions="false"
      @close="handleClose(tag)" @click="Showlist(tag)">
      {{ tag.name }}
    </el-tag>
    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
      @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

    <el-table :data="listarr" class="table">

      <el-table-column label="id" width="80" prop="id">
      </el-table-column>
      <el-table-column label="name" width="150" prop="name">
      </el-table-column>
      <el-table-column label="url" prop="url">

      </el-table-column>
      <el-table-column label="image" prop="image">
      </el-table-column>

      <el-table-column label="删除" width="80">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" circle @click="DeleteThis(scope.row)"></el-button>
        </template>

      </el-table-column>

    </el-table>
    <el-button class="btn" type="success" @click="addCLip">添加内容</el-button>
    <Addlist  />
  </div>
</template>

<script>
import api from '../../api/index';
import Addlist from './Addlist.vue'
export default {
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      listarr: [],
      btnchange: 0
    };
  },
  components: {
    Addlist
  }
  ,
  methods: {
    handleClose(tag) {
      api.DeltectContent({
        id: tag.id
      }).then(res => res.data).then(data => {
        if (data.status == 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.http()
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      })
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let time = Date.parse(new Date())
      let inputValue = this.inputValue;
      if (inputValue) {
        let arr = {
          name: this.inputValue,
          pid: time
        }
        api.AddContent(arr).then(res => res.data).then(data => {
          if (data.status == 200) {
            this.http()
            this.$message({
              type: 'success',
              message: '添加成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: '添加失败'
            })
          }
        })

      }
      this.inputVisible = false;
      this.inputValue = '';

    }, http() {
      api.SelectContent().then(res => res.data).then(data => {
        this.dynamicTags = data.result
      })
    },
    Showlist(tag) {
      this.btnchange = tag.pid
      api.searchlist({
        pid: tag.pid
      }).then(res => res.data).then(data => {
        this.listarr = data.result
      })
    },
    addCLip() {
      if (this.btnchange) {
        this.$bus.$emit("showTot", [this.btnchange, true])
      } else {
        this.$message({
          type: 'error',
          message: '请选择一个类型'
        })
      }

    }, DeleteThis(res) {
      api.deletelist({
        id: res.id
      }).then(res => res.data).then(data => {
        if (data.status == 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.http()
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      })
    }

  },
  mounted() {
    this.http()
  }
}
</script>

<style scoped>
.el-tag+.el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.table {
  margin-top: 20px;
}

.btn {
  float: right;
  margin-top: 10px;

}
</style>