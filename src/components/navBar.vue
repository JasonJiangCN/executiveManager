<template>
<div id="navBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light" :router=true>
    <!-- submenu label indicates a folder name. Should not linked to a view-->
    <el-submenu index="1">
    <template slot="title">导航一</template>
    <el-menu-item-group title="分组一">
    <el-menu-item index="">选项1</el-menu-item>
    <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
    <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
    <template slot="title">选项4</template>
    <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
    </el-submenu>
    <!-- login and Attendence menu for dev mode. 
      Should be removed after the nav bar is finished -->
    <el-menu-item index="/login">Login</el-menu-item>
    <el-menu-item index="/attsummary">Attendence</el-menu-item>
    </el-menu>
</div>
</template>
<script>
export default {
    methods: {
        //Default methods for the navBar
        //TODO remove them and add $http function to require the menu from server
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    //TODO include a update property here for update the menu when the data was updated
    data: function() {
        return {
            //menu data for showing in the nav bar
            //TODO should be linked to the navBar content after the update methods was built
            naiveMenu: '',
            secondClassMenu: [],
            thirdClassMenu:[],

            //determine the menu type
            menuController: false
        }
    }
    /*created: function(){
      var app = this;
      app.$http.get("http://localhost:8080/glmis/menu")
      .then(function(response) {
      app.naiveMenu = response.data
      for (var i=0; i<app.naiveMenu.length; i++) {
      app.secondClassMenu[i] = app.naiveMenu[i].children[0]
      }
      for (i=0; i<app.secondClassMenu.length; i++) {
      app.thirdClassMenu[i] = app.secondClassMenu[i].children[0]
      }
      if (naiveMenu.length == 2){

      app.menuController = true;
      }
      })
      } */

}
</script>
