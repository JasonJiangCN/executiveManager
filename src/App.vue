<template>
<!DOCTYPE html>
<div id="app">
    <title>管理工程学院综合信息管理平台</title>
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
