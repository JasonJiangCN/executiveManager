<template>
<div id="footer" >
<el-row type="flex"  justify="space-between">
<el-col :span="9" :offset="2">
<p style="font">管理学院行政系统</p>
</el-col>
<el-col></el-col>
<el-col :span="10">
<p 
    @click="notify"
    style="size:16px"
    >Copyright (c)<br> 2017-Present, Xin (Jason) Jiang</p>

</el-col>
</el-row>

</div>
</template>

<script>
export default {
    methods: {
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
