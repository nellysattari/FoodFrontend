<template>
  <div id="appTool">
    <TitleComponent msg='title'></TitleComponent>
    <router-view name="title" />
    <router-view name="steps" />
    <router-view name="main" />
    <!-- <img alt=" logo" src="./assets/.jpg" /> -->
  </div>
</template>

<script>
import 'tool-vue-lib';
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/tool-vue-lib/dist/tool-vue-lib.css";
 
#appTool {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
