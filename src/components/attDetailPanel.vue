<template>
<div id="attDetailPanel">


    <!-- The Attendance Sheet -->
    <el-tabs v-model="activePanelName" @tab-click="handlePanelClick">
    <!-- Panel For the candidate form-->
    <el-tab-pane label="考勤对象" name="candidate">
    <el-row>
    <el-col :span="13">
    <!--
            Candidate Table
          /* DATA
            @candidateTableData
            @candidateSelectedRow

            */
                -->
    <el-table
    ref="candidateTable"
    :data="candidateTableData"
    highlight-current-row
    @current-change="handleCandidateSelectedRowChange"
    style="width: 401px">
    <el-table-column
    property="id"
    label="ID"
    width="100">
    </el-table-column>
    <el-table-column
    property="name"
    label="姓名"
    width="300">
    </el-table-column>
    </el-table>
    </el-col>
    <!-- Div For the Attendence Status Card -->
    <el-col :span="8" :offset="1">
    <el-card :body-style="{ padding: '0px' }">
    <i 
        :class="statusIcon" 
        style="font-size:60px;display:flex;justify-content: space-around;margin: 20px"
        :style="statusIconStyle"
        ></i>  
    <div style="padding: 14px;">
        <span style="display: flex;justify-content: center;">{{ attendanceStatus }}</span>
        <!--
            For showing times and other stuff
            <div class="bottom clearfix">
            <time class="time"></time>
            </div>
            -->
    </div>
    </el-card>
    </el-col>



    </el-row>
    <!--
            Pagination For Candidate Table
            All varibles are formatted like xxxForCandidatePagination
         -->

    <el-pagination
    @size-change="handleSizeChangeForCandidatePagination"
    @current-change="handleCurrentChangeForCandidatePagination"
    :current-page.sync="currentPageForCandidatePagination"
    :page-size="100"
    layout="prev, pager, next, jumper"
    :total="1000"
    id="candidatePagination">
    </el-pagination>


    </el-row>
    

    </el-tab-pane>
    <el-tab-pane label="出勤" name="attended"></el-tab-pane>
    <el-tab-pane label="公假" name="officialLeave"></el-tab-pane>
    <el-tab-pane label="旷工" name="absent"></el-tab-pane>
    <el-tab-pane label="事假" name="personalLeave"></el-tab-pane>
    <el-tab-pane label="学校缺勤" name="universityLeave"></el-tab-pane>
    </el-tabs>






    <!-- For future use & bottom margin -->
    <el-row></el-row>
    <!-- Attendance Sheet Finished-->




</div>
</template>

<script>
export default {
    data: function() {
        return {
            //Used to control the current showed panel
            activePanelName: 'candidate',
            //tableData for the candidate table
            candidateTableData: [],
            //currently selected Candidate row
            candidateSelectedRow: '',
            //StatusIcon Arrtibutes
            attendanceStatus: '请选择要查询的对象',
            statusIcon: 'el-icon-menu',
            statusIconStyle: 'color:#8492a6',


        }
    },
    /*
       Props passed by the attSumTable.vue
       @selectedAttList: selected row of attendance list. used to get the actual data from the server
     */
    props: ['selectedAttListId'],
    methods: {
        //Used to handle the change of status
        //including both the icon and color, will be called in the watch property
        handleAttStatusChange(newStatus, oldStatus) {
            if (newStatus == '出勤') {        
                this.statusIconStyle='color:#13CE66'
                this.statusIcon='el-icon-check'
            }
        },
        handleCandidateSelectedRowChange: function(newRow, oldRow) {
            this.candidateSelectedRow = newRow;

            //For test only
            this.attendanceStatus = '出勤'
        }
    },
    watch: {
        //Ater a new candidate was selected 
        //update the status logo
        attendanceStatus: {
            handler: 'handleAttStatusChange',
            deep: true
        },
        selectedAttListId: {
            handler: function(newId, oldId){
                if (newId == 1)
                    this.candidateTableData=  [
                            {id: '1', name: 'Admin'},
                            {id:'2', name: 'Jason'},
                            {id: '3', name: 'Unknown'}
                        ];
            },
            deep: true
        }    
    }


}



</script>
<style>


</style>
