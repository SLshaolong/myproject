"use strict";(self["webpackChunkvue_ego"]=self["webpackChunkvue_ego"]||[]).push([[266],{7266:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return t("div",[e._l(e.dynamicTags,(function(s,a){return t("el-tag",{key:a,attrs:{closable:"","disable-transitions":!1},on:{close:function(t){return e.handleClose(s)},click:function(t){return e.Showlist(s)}}},[e._v(" "+e._s(s.name)+" ")])})),e.inputVisible?t("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm.apply(null,arguments)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):t("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")]),t("el-table",{staticClass:"table",attrs:{data:e.listarr}},[t("el-table-column",{attrs:{label:"id",width:"80",prop:"id"}}),t("el-table-column",{attrs:{label:"name",width:"150",prop:"name"}}),t("el-table-column",{attrs:{label:"url",prop:"url"}}),t("el-table-column",{attrs:{label:"image",prop:"image"}}),t("el-table-column",{attrs:{label:"删除",width:"80"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.DeleteThis(s.row)}}})]}}])})],1),t("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:e.addCLip}},[e._v("添加内容")]),t("Addlist")],2)},l=[],i=s(586),n=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"添加组件",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{model:e.addFrom,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"name"}},[t("el-input",{model:{value:e.addFrom.name,callback:function(t){e.$set(e.addFrom,"name",t)},expression:"addFrom.name"}})],1),t("el-form-item",{attrs:{label:"url"}},[t("el-input",{model:{value:e.addFrom.url,callback:function(t){e.$set(e.addFrom,"url",t)},expression:"addFrom.url"}})],1),t("el-form-item",{attrs:{label:"image"}},[t("el-input",{model:{value:e.addFrom.image,callback:function(t){e.$set(e.addFrom,"image",t)},expression:"addFrom.image"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addClickHandle}},[e._v("确 定")])],1)],1)},o=[],r={data(){return{dialogVisible:!1,addFrom:{},pid:""}},methods:{handleClose(e){e()},addClickHandle(){i.Z.addlist({pid:this.pid,name:this.addFrom.name,urls:this.addFrom.url,image:this.addFrom.image}).then((e=>e.data)).then((e=>{200==e.status?(this.$message({type:"success",message:"添加成功"}),this.dialogVisible=!1):this.$message({type:"error",message:"添加失败"})}))}},mounted(){this.$bus.$on("showTot",(e=>{this.dialogVisible=e[1],this.pid=e[0]}))}},u=r,d=s(1001),c=(0,d.Z)(u,n,o,!1,null,null,null),h=c.exports,m={data(){return{dynamicTags:[],inputVisible:!1,inputValue:"",listarr:[],btnchange:0}},components:{Addlist:h},methods:{handleClose(e){i.Z.DeltectContent({id:e.id}).then((e=>e.data)).then((e=>{200==e.status?(this.$message({type:"success",message:"删除成功"}),this.http()):this.$message({type:"error",message:"删除失败"})}))},showInput(){this.inputVisible=!0,this.$nextTick((e=>{this.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm(){let e=Date.parse(new Date),t=this.inputValue;if(t){let t={name:this.inputValue,pid:e};i.Z.AddContent(t).then((e=>e.data)).then((e=>{200==e.status?(this.http(),this.$message({type:"success",message:"添加成功"})):this.$message({type:"error",message:"添加失败"})}))}this.inputVisible=!1,this.inputValue=""},http(){i.Z.SelectContent().then((e=>e.data)).then((e=>{this.dynamicTags=e.result}))},Showlist(e){this.btnchange=e.pid,i.Z.searchlist({pid:e.pid}).then((e=>e.data)).then((e=>{this.listarr=e.result}))},addCLip(){this.btnchange?this.$bus.$emit("showTot",[this.btnchange,!0]):this.$message({type:"error",message:"请选择一个类型"})},DeleteThis(e){i.Z.deletelist({id:e.id}).then((e=>e.data)).then((e=>{200==e.status?(this.$message({type:"success",message:"删除成功"}),this.http()):this.$message({type:"error",message:"删除失败"})}))}},mounted(){this.http()}},p=m,b=(0,d.Z)(p,a,l,!1,null,"747614aa",null),g=b.exports}}]);
//# sourceMappingURL=266.47aebf6f.js.map