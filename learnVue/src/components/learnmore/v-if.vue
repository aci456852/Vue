<template>
	<div>
		<p>请输入A/B/C~</p>
		<input v-model="type">
	    <div v-if="type === 'A'">
	      it is A
	    </div>
	    <div v-else-if="type === 'B'">
	      it is B
	    </div>
	    <div v-else-if="type === 'C'">
	      it is C
	    </div>
	    <div v-else>
	      Not A/B/C
	    </div>
	</div>
</template>

<script>
export default {
	el: '#app',
    data() {
      return {
        type: ''
      }
    }
}
</script>