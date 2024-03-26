<template>
	<view class="content">
		Promise的使用说明
	</view>
</template>

<script setup>
import {onLoad} from  "@dcloudio/uni-app"

onLoad(()=>{
	// promise 的链式调用 [2.0版本]
	getNav().then(res=>{
		let id = res.data[0].id;
		console.log(id);
		// 返回的也是promise,可以继续使用promise
		return getList(id)
	}).then(res=>{
		let id = res.data[0].id;
		console.log(id);
		return getComments(id)
	}).then(res=>{
		console.log(res);
	})
	
/* 	// promise使用
	let p = new Promise((resolve,reject)=>{
		uni.request({
			url:"https://ku.qingnian8.com/dataApi/news/navlist.php2",
			success:res=>{
			  resolve(res);
			},
			fail:err=>{
				reject(err)
			}
		})
	})
	console.log(p);
	
	p.then(res=>{
		// then 对应上方的resolve
		console.log(res);
	}).catch(err=>{
		// catch 对应上方的reject
		console.log(err);
	}) */
	
	
	// // 传统型的回调函数做回调处理
	// getNav(res=>{
	// 	console.log(res);
	// 	let id = res.data[0].id;
	// 	getList(id, res=>{
	// 		console.log(res);
	// 		let aid = res.data[0].id;
	// 		getComments(aid, res=>{
	// 			console.log(res);
	// 		})
	// 	})
	// })
	
	
})

// 获取分类列表id
function getNav(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
			success:res=>{
				resolve(res)
			},
			fail:err=>{
				reject(err)
			}
		})	
	})

}

// 根据分类id获取该分类下的所有文章
function getList(id){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
			data:{
			  cid:id
			},
			success:res=>{
			  resolve(res)
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}

// 根据文章id找到该文章下的评论
function getComments(id){
	return new Promise((resolve,reject)=>{
		uni.request({
		  url:"https://ku.qingnian8.com/dataApi/news/comment.php",
		  data:{
			aid:id
		  },
		  success:res=>{
			resolve(res)
		  },
		  fail:err=>{
			  reject(err)
		  }
		})
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
