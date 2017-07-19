<template>
<!DOCTYPE html>
<div id="index">
    <title>管理工程学院综合信息管理平台</title>
    <div id="indexContent">
    <index-header></index-header>
        <el-row :gutter="20">
        <el-col :span="6">
        <div id="navBar">
            <nav-bar></nav-bar>
        </div>
        </el-col>
        <el-col :span="18">
        <div id="view">
            <transition name="el-fade-in">
            <router-view></router-view>
            </transition>
        </div>
        </el-col>
        </el-row>
    </div>
    <index-footer></index-footer>
</div>
</template>

<script>
import navBar from './navBar.vue'
import indexFooter from './indexFooter.vue'
import indexHeader from './indexHeader.vue'
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
        indexFooter,
        indexHeader,
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
    margin-right: 0;
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
#indexContent {
    min-height:100vh;         
    margin-bottom:-70px; 
}
</style>
