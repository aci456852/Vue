<template>
	<div v-bind:class="{ active: isActive }"></div> <!--<div class="active">-->
	<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div> <!--<div class="static active text-danger">-->
	<div v-bind:class="[activeClass, errorClass]"></div> <!--<div class="active text-danger">-->
	<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div><!--errorClass 是始终存在的，isActive 为 true 时添加 activeClass 类：-->
	<!--内联样式 -->
	<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
	<div v-bind:style="styleObject">菜鸟教程</div>
	<div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div><!--使用数组将多个样式对象应用到一个元素上 -->
</template>

<script>
new Vue({
  el: '#app',
  data: {
    isActive: true,
    error: {
      value: true,
      type: 'fatal'
    }
  },
  computed: {
    classObject: function () {
      return {
  		base: true,
        active: this.isActive && !this.error.value,
        'text-danger': this.error.value && this.error.type === 'fatal',
      }
    }
  }
})
</script>