<template>
<!DOCTYPE html>
<!-- This class is the wrapper class for the whole app
    should not contain any data and methods 
        or any html content for showing in the website at here.
-->
<div id="app">
    <title>管理工程学院综合信息管理平台</title>
    <!-- the whole app starts here -->
    <index></index>
</div>  
</template>

<script>
import index from './components/index.vue'
export default {
    data: function() {
        return {
        }
    },
    components: {
        //register the index components
        index
    }

}
</script>

<style>
* {
    margin: 0;
}
body {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    height: 100%;
}

html {
    height: 100%;
}

</style>
