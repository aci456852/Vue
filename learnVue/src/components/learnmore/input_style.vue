<template>
	<div>
	    <p>单个复选框：</p>
  		<input type="checkbox" id="checkbox" v-model="checked">
  		<label for="checkbox">{{ checked }}</label>
    
  		<p>多个复选框：</p>
  		<input type="checkbox" id="a" value="a" v-model="checkedNames">
  		<label for="a">a</label>
  		<input type="checkbox" id="b" value="b" v-model="checkedNames">
  		<label for="b">b</label>
  		<input type="checkbox" id="c" value="c" v-model="checkedNames">
  		<label for="c">c</label>
 		<span>选择值为: {{ checkedNames }}</span>
 		    
  		<p>单选按钮：</p>
 		<input type="radio" id="d" value="d" v-model="picked">
	  	<label for="d">d</label>
	  	<input type="radio" id="e" value="e" v-model="picked">
	  	<label for="e">e</label>
	  	<span>选中值为: {{ picked }}</span>	  	
	  	
	  	<p>下拉列表：</p>
	  	<select v-model="selected" name="case">
    		<option value="">这是一个下拉列表</option>
    		<option value="it is ok">case1</option>
    		<option value="all right">case2</option>
  		</select>
 		<span>选中值为: {{ selected }}</span>	  	
	</div>
	<!--
    	修饰符.trim：自动过滤用户输入的首尾空格	<input v-model.trim="msg">
		修饰符.number：自动将用户的输入值转为 Number 类型   <input v-model.number="age" type="number">
    -->
</template>

<script type = "text/javascript">
export default {
    el: '#app',
    data() {
        return {
            checked : false,
    		checkedNames: [],
    		picked : '',
    		selected : ''
         }
    }
}
</script>