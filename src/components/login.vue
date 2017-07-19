<template>
<div id="login">
    <el-row :gutter="20">
    <div id="userName">
        <el-col :span="4">
        <label>Username</label>
        </el-col>
        <el-col :span="9">
        <el-input v-model="userName" placeholder="请输入内容"></el-input>
        </el-col>
    </div>
    </el-row>
    <el-row :gutter="20">
    <div id="passwd">
        <el-col :span="4"> 
        <label>Password</label>
        </el-col>
        <el-col :span="9">
        <el-input v-model="passwd" placeholder="Password"></el-input>
        </el-col>
    </div>
    </el-row>
    <el-row :gutter="20">
    <div id="checkCode">
        <el-col :span="4">
        <label>Check Code</label>
        </el-col>
        <el-col :span="8">
        <el-input v-model="checkCode" placeholder="CheckCode"></el-input>
        </el-col>
    </div>
    </el-row>
    <el-row :gutter="20">
    <e-col :span="6">
    <img
    :src="imgSrc"
    @click="changeImg"
   style="width:80px;height:30px;margin-top:5px;margin-right: 10px;margin-left: 3    0px"
    ></img>
    </e-col>
    <e-col :span="8" :offset="6">
        <el-button>Summit</el-button>
    </e-col>
    </el-row>
</div>
</template>


<script>
export default {
    data: function() {

        return {
            userName: '',
            passwd: '',
            imgSrc: 'https://vuejs.org/images/logo.png',
                checkCode: ''
        }
    },
    methods: {
        changeImg: function() {
            this.imgSrc="https://avatars0.githubusercontent.com/u/14368473?v=4&s=460"
        }
    }
}



</script>
