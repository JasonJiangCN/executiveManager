<template>
<div id="login">
    <el-row>
    <el-col :span="6">
    <!-- breadcrumb bar -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>登录</el-breadcrumb-item>
    </el-breadcrumb>
    </el-col>
    </el-row>
    <el-row :gutter="20">
    <!-- User name area, containing 2 columns showing label and input area -->
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
    <!-- Checkcode area here. when click the picture, a new checkcode should be required-->
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
    <el-col :span="6">
    <img
    :src="imgSrc"
    @click="getImg"
    style="width:80px;height:30px;margin-top:5px;margin-right: 10px;margin-left: 3    0px"
    ></img>
    </el-col>
    <el-col :span="8" :offset="6">
    <!-- TODO the button should linked to a function when clicked -->
    <el-button
    @click="submitForm">Submit</el-button>
    </el-col>
    </el-row>

</div>
</template>


<script>
export default {
    data: function() {

        return {
            //userName input
            userName: '',
            //password input
            passwd: '',
            //img src info. Should be initialized with blank
            imgSrc: '/api/glmis/kaptcha/getKaptchaImage',
            //checkcode input
            checkCode: ''
        }
    },
    methods: {
        //when the pic was clicked,
        //change the img src
        //TODO add a $http.get function here to require the picture.
        getImg: function() {
            this.imgSrc = '/api/glmis/kaptcha/getKaptchaImage?nowT='+new Date().getTime()
        },
        submitForm: function() {
            var submitObj = {
                username: this.userName,
                password: this.passwd,
                verificationCode: this.checkCode
            };
            this.$http.post('http://localhost:8080/glmis/login',submitObj)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }) 
        }

    }
}



</script>

