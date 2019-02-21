<template>
	<form id="main" v-cloak>
	    <div class="bar">
	        <input type="text" v-model="searchString" placeholder="输入搜索内容" />
	    </div> 
	    <ul>            
	        <li v-for="article in filteredArticles">
	            <p>{{article.title}}</p>
	        </li>
	    </ul>	 
	</form>
</template>

<script>
export default {
    el: '#main',
    data() {
        return {
	        searchString: "",	 
	        // 数据模型，实际环境可以根据 Ajax来获取
			articles: [
	            {
	                "title": "今天星期一"
	            },
	            {
	                "title": "今天星期一一"
	            },
	            {
	                "title": "今天星期一一一"
	            },
	            {
	                "title": "今天星期四"
	            },
	            {
	                "title": "今天星期五"
	            },
	            {
	                "title": "今天星期六"
	            },
	            {
	                "title": "今天星期日"
	            }
	        ]
        }
    },
    computed: {
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;
            if(!searchString){
                return articles_array;
            }
            searchString = searchString.trim().toLowerCase(); 
            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            return articles_array;
        }
    }
}
</script>