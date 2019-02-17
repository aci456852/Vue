<template>
	<div id="app">
	    <p style = "font-size:25px;">计数器: {{ counter }}</p>
	    <button @click = "counter++" style = "font-size:25px;">点我</button>
	</div>
</template>

<script>
export default {
    el: '#app',
    data() {
        return {
            counter: 1
         }
    },
    watch: {
	    counter(nval, oval) {
	      console.log('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
	    }
	} 
}
/*
this.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
*/
setTimeout(
    function(){
        this.counter += 20;
    },10000
);
</script>