<template>
	<div id = "app">
	    千米 : <input type = "text" v-model = "kilometers">
	    米 : <input type = "text" v-model = "meters">
	    <p id="info"></p>
	</div>
</template>

<script type = "text/javascript">
export default {
    el: '#app',
    data() {
        return {
            kilometers : 0,
            meters:0
        }
    },
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    }
}
</script>