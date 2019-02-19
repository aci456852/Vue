<template>
	<!-- v-cloak 隐藏未编译的变量,元素点击后 hideTooltp() 方法被调用 -->
	<div id="main" v-cloak v-on:click="hideTooltip"> 
	    <div class="tooltip" v-on:click.stop v-if="show_tooltip"> 
	        <input type="text" v-model="text_content" />
	    </div>	 
	    <!-- 点击后调用 "toggleTooltip" 方法并阻止事件传递 --> 
	    <p v-on:click.stop="toggleTooltip">{{text_content}}</p>	 
	</div>
</template>

<script>
export default {
    el: '#main',
    data() {
        return {
            show_tooltip: false,
        	text_content: '点我即可编辑内容哦~'
         }
    },
    methods: {
        hideTooltip: function(){
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = true;
        }
    }
}
</script>