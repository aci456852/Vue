<template>
	<div id="main">
	    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
	    <nav v-bind:class="active" v-on:click.prevent>	 
	        <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->	 
	        <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
	        <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
	        <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
	        <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
	    </nav>	 
	    <p>您选择了 <b>{{active}} 菜单</b></p>
	</div>
 
</template>

<script>
export default {
    el: '#main',
    data() {
        return {
            active: 'home'
         }
    },
    methods: {
        makeActive: function(item){
            this.active = item;
        }
    }
}
</script>