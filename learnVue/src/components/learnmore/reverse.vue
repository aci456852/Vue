<template>
	<div>
	    <p>{{ message }}</p>
	    <button v-on:click="reverseMessage">反转字符串</button>
	</div>
</template>
    
<script>
export default {
	el: '#app',
    data() {
      return {
        message: '你倒是显示呀!!!'
      }
    },
  	methods: {
      reverseMessage: function () {
      	this.message = this.message.split('').reverse().join('')
      }
  	}
}
</script>