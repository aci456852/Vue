<template>
	<div id="computed_props">
	    <p>千米 :</p>
	    <input v-model = "kilometers">
	    <p>米 :</p>
	    <input v-model = "meters">
		<p id="info"></p>	
	</div>
</template>

<script type = "text/javascript">
import Vue from 'vue'
var vm = new Vue({
    el: '#computed_props',
    data: {
        kilometers : 0,
        meters:0
    },
    watch:{
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    }
   });
vm.$watch('kilometers', function (newValue, oldValue) { // $watch 是一个实例方法
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})
</script>