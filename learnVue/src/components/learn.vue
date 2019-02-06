<template>
  <div id="vue">Hello Vue.js! {{ message }}</div>
</template>

<script type="text/javascript">
  export default { 
    name: "learn",
    data (){ 
      return {
        message: "lzy冲鸭"
      }
    }
  }
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>