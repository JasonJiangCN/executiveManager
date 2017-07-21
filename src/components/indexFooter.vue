<template>
<div id="footer" >
    <!--For Future Use -->
    <el-row></el-row>

<el-row type="flex"  justify="space-between">
<el-col :span="9" :offset="2">
<p style="font">管理学院行政系统</p>
</el-col>
<el-col></el-col>
<el-col :span="10">
<!-- Copyright info here, with Easter Egg!  -->
<p 
    @click="notify"
    style="size:16px"
    >Copyright (c)<br> 2017-Present, Xin (Jason) Jiang</p>

</el-col>
</el-row>

</div>
</template>

<script>
//TODO adjust the position of the Copyright info.
export default {
    methods: {
        //Easter Egg Here!
        notify: function() {
            this.$notify.info({
                title: 'BOOM!',
                message: 'I\'m Jason!'
            })
        }
    }
}

</script>

<style>
#footer {
    color: #a4aebd;
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    /*脚部的高度*/
    overflow: hidden;
    background: #475669;
}

</style>
