<template>
	<div>
	  <p>原始字符串: {{ message }}</p>
	  <p>计算后反转字符串computed : {{ reversedMessage }}</p>
	  <p>计算后反转字符串methods  : {{ reversedMessage2() }}</p>
	  <!--
      	我们可以使用 methods 来替代 computed，效果上两个都是一样的，
      	但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。
      	而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
      -->
	</div>
</template>

<script>
var cnt=1;
export default{
	el: '#app',
	data() {
      return {
        message: '你倒是显示呀!!!'
      }
    },
	computed: {
	    // 计算属性的 getter
	    reversedMessage: function () {
	      // `this` 指向 vm 实例
	      cnt+=1;
	      return cnt+this.message.split('').reverse().join('')
	    }
	},
	methods: {
	    reversedMessage2: function () {
	      cnt+=1;
	      return cnt+this.message.split('').reverse().join('')
	    }
	}
}
</script>