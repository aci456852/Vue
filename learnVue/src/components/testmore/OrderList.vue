<template>
	<form id="main" v-cloak>
	    <h1>累加选定的物品总价值，单击可选中/取消选中</h1>
	    <ul>
	        <!-- 循环输出 services 数组, 设置选项点击后的样式 -->
	        <li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}"> 
	            {{service.name}} <span>{{service.price | currency}}</span> {{service.active}} 
	        </li>
	    </ul> 
	    <div class="total">
	        <!-- 计算所有服务的价格，并格式化货币 (过滤器)-->
	        	总计: <span>{{total() | currency}}</span>        
	    </div>
	</form>
</template>

<script>
export default {
	el: '#main',
    data() {
      return {
        services: [
            {
                name: 'Web Development',
                price: 300,
                active:false
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
        ]
      }
    },
  	filters: { //自定义过滤器           
      capitalize: function (value) {
			return '$' + value.toFixed(2)
	    }
  	},
  	methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){
            var total = 0;
            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            }); 
           return total;
        }
   }
}
</script>