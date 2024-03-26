<template>
	<view class="content">
		Promise的使用说明
	</view>
</template>

<script setup>
import {onLoad} from  "@dcloudio/uni-app"

onLoad(()=>{
	getNav(res=>{
		console.log(res);
		let id = res.data[0].id;
		getList(id, res=>{
			console.log(res);
			let aid = res.data[0].id;
			getComments(aid, res=>{
				console.log(res);
			})
		})
	})
	
	
})

// 获取分类列表id
function getNav(callback){
	uni.request({
		url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
		success:res=>{
		  callback(res);
		},
	})
}

// 根据分类id获取该分类下的所有文章
function getList(id, callback){
      uni.request({
        url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
        data:{
          cid:id
        },
		success:res=>{
		  callback(res)
		},
	})
}

// 根据文章id找到该文章下的评论
function getComments(id, callback){
	uni.request({
	  url:"https://ku.qingnian8.com/dataApi/news/comment.php",
	  data:{
	    aid:id
	  },
	  success:res=>{
		callback(res)
	  }
	})
}


/* function getData(){
  //获取分类列表id
  uni.request({
    url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
    success:res=>{
	  console.log(res);
      let id=res.data[1].id
      // 根据分类id获取该分类下的所有文章
      uni.request({
        url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
        data:{
          cid:id
        },
        success:res2=>{
          //获取到一篇文章的id，根据文章id找到该文章下的评论
		  console.log(res2);
          let id=res2.data[1].id;
          uni.request({
            url:"https://ku.qingnian8.com/dataApi/news/comment.php",
            data:{
              aid:id
            },
            success:res3=>{
              //找到该文章下所有的评论
              console.log(res3)
            }
          })
        }
      })

    }
  })
} */

</script>

<style lang="scss" scoped>

</style>
