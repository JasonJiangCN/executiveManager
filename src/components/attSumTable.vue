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
        <el-button type="primary" icon="plus"></el-button>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="delete"></el-button>
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
        prop="text"
        label="考勤列表名称"
        >
        </el-table-column>
        <el-table-column
        prop="attendanceManager"
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
        <el-button type="primary" @click="attDialogVisible = false">查 询</el-button>
        </el-row>
        </el-dialog>
        <!-- Search Dialog Finished-->
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
                { id: '1',text:'List1', attendanceManager: 'Admin'},
                { id: '2',text:'List2' ,attendanceManager: 'Admin'}
            ],
            //Loading Controller for the page
            tableLoading: true,
            //Search Dialog visibility controller
            attDialogVisible: false,
            //value picked by the date picker
            dateValue: '',
            //Row Picked by the Attendance Summary Table
            attSumTableSelectedRow: null,




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
        //Used to handle the change of status
        //including both the icon and color, will be called in the watch property
        handleAttStatusChange(newStatus, oldStatus) {
            if (newStatus == '出勤') {        
                this.statusIconStyle='color:#13CE66'
                this.statusIcon='el-icon-check'
            }
        }
    },
    watch: {

    },
        mounted: function() {
        //Used for showing the loading effect
        //auto disappeared after 1 seconds
        //TODO let it disappeared after the table was loaded successfully IF POSSIBLE
        this.tableLoading = true;
        setTimeout(() => {
            this.tableLoading = false;
        }, 1000);
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
