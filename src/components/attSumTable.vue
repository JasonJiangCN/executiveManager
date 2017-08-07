<template>
<div id="attSumTable">
    <el-row>
    <el-col :span="10">
    <!-- The breadcrumb navigator-->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>考勤管理</el-breadcrumb-item>
    <el-breadcrumb-item>考勤后台管理</el-breadcrumb-item>
    </el-breadcrumb>

    </el-col>

    </el-row>
    <div id="attTable">
        <el-row>
        <!-- The row for showing the search and edit buttons-->
        <el-col :span="3">
        <el-button 
        type="primary" 
        icon="search" 
        @click="attDialogVisible=true"
        >查询</el-button>
        </el-col>
        <el-col :span="5" :offset="1">
        <el-button-group>
        <el-button type="primary" icon="plus" @click="addDialogVisible=true"></el-button>
        <el-button type="primary" icon="edit" @click="editDialogVisible=true"></el-button>
        <el-button type="primary" icon="delete" @click="delDialogVisible=true"></el-button>
        </el-button-group>
        </el-col>
        <el-button @click="setCurrent()">取消选择</el-button>
        </el-row>

        <!--
             For the Attendance Table
             Varibles should be formatted like xxxForSummary
             -->
        <el-row>
        <el-col :span="12">
        <el-table
        ref="singleTable"
        :data="attListData"
        highlight-current-row
        @current-change="handleAttSumTableSelectedRowChange" 
        style="width: 100%"
        v-loading.fullscreen.lock="tableLoading"
        element-loading-text="表单加载中">

        <el-table-column
        prop="attendanceName"
        label="考勤列表名称"
        >
        </el-table-column>
        <el-table-column
        prop="attendanceManager.name"
        label="考勤人"
        >
        </el-table-column>
        </el-table>
        <el-pagination
        small
        layout="prev, pager, next, total"
        :total=calculateRecordNum()
        id="attTablePagination"
        >
        </el-pagination>

        </el-col>

        </el-col>
        </el-row>

        <!-- Attendance Table Finished-->


        <!-- The new-built attendance detail sheet part-->
        <att-detail-panel
        :selectedAttListId="passSelectedAttListId()"
        ></att-detail-panel>


        <!-- The Search Dialog for the Attendence Table-->
        <el-dialog title="查询" :visible.sync="attDialogVisible" size="tiny">
        <el-row>
        <span class="demonstration">请选择要查询的日期范围</span>
        </el-row>
        <el-row>
        <el-date-picker
        v-model="dateValue"
        type="daterange"
        align="right"
        placeholder="选择日期范围"
        :picker-options="pickerOptions">
        </el-date-picker>
        </el-row>
        <el-row>
        <el-button @click="attDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAttListSearch">查 询</el-button>
        </el-row>
        </el-dialog>
        <!-- Search Dialog Finished-->

        <!-- Add Dialog -->
        <el-dialog title="添加" :visible.sync="addDialogVisible">
        <el-form :model="addForm">
        <el-form-item label="考勤名称">
        <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
        <el-date-picker
        v-model="addForm.date"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
        </el-date-picker>
        </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addForm={date:'',name:''}">清 空</el-button>
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitAddForm(true)">确 定</el-button>
        </div>
        </el-dialog>
        <!-- Add Dialog Finished-->

        <!-- Edit Dialog-->
         <el-dialog title="修改" :visible.sync="editDialogVisible">
        <el-form :model="addForm">
        <el-form-item label="考勤名称">
        <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
        <el-date-picker
        v-model="addForm.date"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
        </el-date-picker>
        </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addForm={date:'',name:''}">清 空</el-button>
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitAddForm(false)">确 定</el-button>
        </div>
        </el-dialog>


        <!-- Edit Dialog Finished -->
        <!-- Delete Dialog-->
         <el-dialog title="删除" :visible.sync="delDialogVisible">
            <el-row>
            <label v-if="attSumTableSelectedRow">确认删除这条考勤记录吗？</label>
            <label v-else>请先选择一条考勤记录！</label>
            </el-row>
            <el-row>
            <label v-if="attSumTableSelectedRow">{{"考勤名称:"+attSumTableSelectedRow.attendanceName + "\n考勤管理员:"+ attSumTableSelectedRow.attendanceManager.name}}</label>
            </el-row>
         <div slot="footer" class="dialog-footer">
            <el-button @click="delDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteAttForm" v-if="attSumTableSelectedRow">确 定</el-button>
        </div>
        </el-dialog>

        <!-- Delete Dialog Finished -->
    </div>
</div>
</template>
<script>
import attDetailPanel from './attDetailPanel.vue'
export default {
    data: function() {
        return {

            //Data showed in the Attendance Table
            attListData: [

            ],
            //Loading Controller for the page
            tableLoading: true,
            //Search Dialog visibility controller
            attDialogVisible: false,
            //value picked by the date picker
            dateValue: '',
            //Row Picked by the Attendance Summary Table
            attSumTableSelectedRow: null,

            //currentPage
            currentSumTablePage: 1,

            //controller for add dialog
            addDialogVisible: false,

            //add form
            addForm: {
                date: '',
                name: ''
            },
            //controller for edit dialog
            editDialogVisible: false,

            //controller for delete dialog
            delDialogVisible: false,


            //dateData Picker Options
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        }
    },
    methods: {

        //TODO add functions for the emitted events in the detail panel

        passSelectedAttListId: function() {
            if (this.attSumTableSelectedRow != null)
                return this.attSumTableSelectedRow.id;
            else
                return null;
        },

        //Used for the Attendance Summary Table Pagination
        //TODO Change the name of varibles to meet the standard
        calculateRecordNum: function() {
            return this.attListData.length
        },
        //Used for the Attendance Summary Table
        //TODO Change the name of this method to meet the standard
        setCurrent(row) {
            //this.attSumTableSelectedRow=row;
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleAttSumTableSelectedRowChange: function(newRow, oldRow) {
            this.attSumTableSelectedRow=newRow;
            console.log(this.attSumTableSelectedRow)
        },
        handleAttListSearch: function(){
            var app = this
            let startTime = app.dateValue[0].toJSON()
            let endTime = app.dateValue[1].toJSON()
            let url = "http://localhost:8080/glmis/findSummary?startTime=" 
                + startTime
            + "&;endTime=" 
            + endTime 
            + "&page=1&rows=10"
            app.$http.get(url)
            .then(function(response){
                app.attListData = response.data.rows
                app.attDialogVisible = false;
            }).catch(function(error){
                alert("ERROR!" + error)
            })

        },
        submitAddForm: function(isAdd){
            if (isAdd){
            var url = "http://localhost:8080/glmis/addAttendanceSummary";
                var app = this
            app.$http.post(url,app.addForm)
            .then(function(response){
                console.log(response)
                app.addDialogVisible = false
            }).catch(function(error){
                alert("ERROR!" + error)
            })
        } else {

        }
    }
},

watch: {

},
mounted: function() {
    let url = "http://localhost:8080/glmis/displayAllAttendanceSummary?page=1&rows=10"
        var app = this
    this.$http.get(url)
    .then(function(response){
        app.attListData = response.data.rows

    })
    .catch(function(error){
        console.log(error)
    })

    //Used for showing the loading effect
    //auto disappeared after 1 seconds
    //TODO let it disappeared after the table was loaded successfully IF POSSIBLE
    this.tableLoading = true;
    setTimeout(() => {
        this.tableLoading = false;
    }, 1);






},
components: {
    //register the new panel componenet
    attDetailPanel   
}


}
</script>

<style>
#attTablePagination {
    margin: 10px auto; 
}
</style>
