<!--
	父组件是使用 props 传递数据给子组件, 但如果子组件要把数据传递回去, 就需要使用自定义事件！
	我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：
	使用 $on(eventName) 监听事件,使用 $emit(eventName) 触发事件
	另外, 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。
-->
<template>
	<div id="app">
	    <div id="counter-event-example">
	      	<p>{{ total }}</p>
	      	<button-counter v-on:increment="incrementTotal"></button-counter>
	      	<button-counter v-on:increment="incrementTotal"></button-counter>
	    </div>
	</div>
</template>

<script>
Vue.component('button-counter', {
	template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
	data: function () {
    	return {
      		counter: 0
    	}
  	},
	methods: {
		incrementHandler: function () {
      		this.counter += 1
      		this.$emit('increment')
    	}
  	},
})
export default {
    el: '#counter-event-example',
    data() {
        return {
            total: 0
         }
    },
    methods:{
    	incrementTotal: function () {
      		this.total += 1
      		this.$emit('increment')
	    }
	}
}
</script>