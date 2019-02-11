<!--<template>   no.1
	<div>
	  <ol>
	    <li v-for="site in sites">
	      {{ site.name }}
	    </li>
	  </ol>
	</div>
</template> -->
<!--<template>   no.2
	<ul>
	  <template v-for="site in sites">
	    <li>{{ site.name }}</li>
	    <li>--------------</li>
	  </template>
	</ul>
</template>-->
<!--<template>   no.3
	<div>
	  <ol>
	    <li v-for="value in object">
	      {{ value }}
	    </li>
	    <li v-for="(value, key) in object">
	    {{ key }} : {{ value }}
	    </li>
	    <li v-for="(value, key, index) in object">
	     {{ index }}. {{ key }} : {{ value }}
	    </li>
	    
	    <li v-for="n in 10">
	     {{ n }} --循环整数
	    </li>
	  </ol>
	</div>
</template>-->

<script>
export default {
	el: '#app',
    data() {
      return {
		    sites: [
		      { name: 'lzy' },
		      { name: 'wise' },
		      { name: 'smart' }
		    ],
		    object: {
		      name: 'lzy',
		      url: 'www.wiselzy.com',
		      slogan: '冲鸭！'
		    }
        }
    }
}
</script>

<style>
</style>