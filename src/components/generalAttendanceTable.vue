<template>
<div>
    <el-row>
    <el-col :span="3">
    </el-col>
   
    <el-button type="primary" icon="d-arrow-left">撤销</el-button>
    <el-button type="primary" icon="plus">添加</el-button>
    <el-button type="primary" icon="edit">修改</el-button>
    <el-button type="primary" icon="delete">删除</el-button>
    <el-button type="primary" icon="document">保存</el-button>
    </el-row>

    <el-row>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="工号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="attendenceStatus"
      label="考勤状态">
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注">
    </el-table-column>

  </el-table>

    </el-row>


</div>
</template>


<script>
export default {
    //Used for getting the content from server
    props:['tableUrl'],
    data: function() {
        return {
            tableData: []
        }
    },
    methods: {
        getTableData: function() {
             this.$http.get(this.tableUrl)
        .then(function(response){
            //TODO check out the format of response here
            //Finish the function here
            console.log(response)
        }).catch(function (error) {
            //when there is an error
        })

        }
    }

}

</script>

