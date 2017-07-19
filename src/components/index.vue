<template>
<el-row>
<el-col :span="24">
</el-col>
<el-row :gutter="20">
<el-col :span="6">
<div id="navBar">
    <nav-bar></nav-bar>
</div>
</el-col>
<el-col :span="18">
<div id="view">
    <router-view></router-view>
</div>
</el-col>
</el-row>
</el-row>
</template>

<script>
import navBar from './navBar.vue'
export default {
    data: function() {
        return {
            data: [{label: 'first',children:[{
                label: 'child1', children:[], url: '/index.html'
            }]},{
                label: 'second', children:[]
            }],
            errMsg: 'good',
            deafultProps: [],
        }
    },
    created: function() {
        var revisedData = []
        this.$http.get('' )
        .then(function(response){

            console.log(response)
        }).catch(function (error) {
            this.errMsg='Error!'
        })
    },
    components: {
        navBar
    },
    methods: {
        handleNodeClick: function(nodeObj, node, nodeCmpnts) {
            console.log(nodeObj,node,nodeCmpnts)
        },
        goAttSum: function() {
        }
    }
}


</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
