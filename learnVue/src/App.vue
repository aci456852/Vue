<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/learn">Go to view1</router-link>
		<router-link to="/learn2">Go to view2</router-link>
		<router-view></router-view>
  </div>
</template>

<script>
	import learn from './components/learn.vue'
	import learn2 from './components/learn2.vue'
	/*export default {
　　name: 'app',
　　data () {
　　　　return {
　　　　　　msg: 'Welcome to Your Vue.js App'
　　　　}
　　},
　　components: { learn }
}*/
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
