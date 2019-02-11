<template>
	<div>
	    <p>{{ message }}</p>
	    <input v-model="message">  <!-- v-model 指令来实现双向数据绑定-->
	</div>
</template>
    
<script>
export default {
	el: '#app',
    data() {
      return {
        message: '你倒是显示呀!!!'
      }
    }
}
</script>