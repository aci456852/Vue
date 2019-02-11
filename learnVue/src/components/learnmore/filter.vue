<template>
	<div>
		<p>{{ message | capitalize }}</p>  <!-- 自定义过滤器 -->
		<input v-model="message">  <!-- 双向绑定  -->
	</div>
</template>

<script>
export default {
	el: '#app',
    data() {
      return {
        message: 'aabbcc'
      }
    },
  	filters: {                             
      capitalize: function (value) {
	      if (!value) return ''
	      value = value.toString()
	      return value.charAt(0).toUpperCase() + value.slice(1)
	      // 定位 + 截取
	    }
  	}
}
</script>