# uniapp 笔记

## css 常用
```scss

# 设置上下左右均居中
display: flex;
align-items: center;
justify-content: center;
```


## pages.json 页面说明
```json
"navigationStyle": "custom"  // custom 自定义导航栏，会导致上述设置均失效
```

## static & common
- static 文件夹内地文件全部会被打包到小程序中
- common 不需要打包的文件可放在此处

## css 尺寸[像素,rpx]
```scss
width: 200px;		// 绝对大小，屏幕像素
width: 60%;			// 可视范围的60%
width: 50vw;			// 可视范围的50%
width: 350rpx;			// 响应式像素：一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。
```

## uniapp 组件生命周期
- setup			组件创建时运行
- onMounted		挂载在DOM时运行
- onUnmounted	元素销毁时运行
> 注意：onUpdated 不支持。

## uniapp 页面生命周期
- onLoad		相当于setup
- onReady		相当于onMounted
- onShow		每次页面显示时,都会显示
- onHide		从当前页面跳转开时,会被调用[eg.切后台]

### 执行顺序

**不包含组件的页面**

onLoad > onShow > onReady
> 只有`onReady`可以拿到 DOM

**包含组件的页面**

onLoad > onShow > onBeforeMount > onReady > onMounted

## js 定时器
```javascript
// 设置定时器
let timer = setInterval(()=>{
	count.value++;
},100);

// 清除定时器
clearInterval(timer);
```

## js的深度解构

**参考博文**:
[ES实用的深度解构赋值方法](https://blog.csdn.net/qq_18798149/article/details/135232483)
```javascript
// 1. 解构对象 [属性前后位置不影响]
// 最基础却啰嗦的写法
let obj = {name:"最基础的写法",age:12};
let name_1 = obj.name;
let age_1 = obj.age;
console.log(name_1,age_1);

// 基本的解构方法：
// 左边的名字与右边的名字要一致，即从obj中只取其中的部分变量
let {name,age} = {name:"解构方法",age:22};
console.log(name,age);
 
// 变量别名，变量默认值
// 给变量添加别名，添加默认值
let {name:newName,age:newAge, gender="保密"} = {name:"变量别名",age:32};
console.log(newName,newAge,gender);
 
// 变量默认值
function fn({name='变量默认值',age=33}={}){
 console.log(name,age);
}
fn()

// 2. 解构数组 [解构数组，需要按照索引顺序解构]
let arr = ["HTML5","JavaScript","Vue","React","NodeJS"];
let str1 = arr[0];
let str2 = arr[1];
let str3 = arr[2];
console.log(str1,str2,str3);


// 数组基础解构用法 [相当于一次性定义三个变量并对变量进行了赋值]
let [arr1,arr2,arr3] = arr
console.log("基础解构",arr1,arr2,arr3);
 
// 选择解构 [如果只需取得数组最后几位，或第几位，需要预留出其他值的位置]
let [,,,val1,val2] = arr;
console.log("选择解构",val1,val2);

// 扩展运算符 [取得数组第一位，剩余使用扩展运算符，统一放置到一个数组中]
let [value,...other] = arr;
console.log("扩展运算符", value, other);		// 扩展运算符 HTML5 ['JavaScript', 'Vue', 'React', 'NodeJS']

// 默认值
let [v1,v2,v3="vue"] = ["HTML","JavaScript"];
console.log("默认值",v1,v2,v3);

// 变换变量值
let name1 = "张三";
let name2 = "李四";
[name2,name1] = [name1,name2];
console.log(name1,name2);

// 3. 解构混用
let person = {	
	name:"坤坤",
	age:25,
	like:['唱','跳','rap','篮球'],
	works:{music:['Wait Wait Wait','鸡你太美'],movies:['童话二分之一','鬼畜区常青树']},
	friend:['丞丞','大宝贝','大黑牛']
}

// 传统型
let result = person.works.music[1];
console.log("传统型:", result);

// 浅层解构
let {works} = person
console.log("浅层解构:",works.music[1]);

// 连续解构
let {works:{music}} = person
console.log("连续解构:", music[1]);

// 数组与对象混用
let {works: {music: [,m2]}} = person;
console.log("数组与对象混用",m2);
 
// 解构+别名
let {works:{music:[,a2], movies:newMov}} = person;
console.log("解构+别名:", a2, newMov);
```

## js的for/forEach循环
- for 使用同c++
- forEach(item=>{})
- map
- filter
- indexOf

### for
```javascript
let arrs = [...Array(9999999).keys()]
let total = 0;

for (let i = 0; i < arrs.length; i++) {
	if(i==100) break;
	total += i;
}
```

### forEach
- 用于遍历数组并对每个元素执行回调函数
- 不提供直接修改数组元素的功能
- 因此 forEach 方法无法直接实现原地修改
- 不支持break; 支持return, 但功能却相当于for-continue


```javascript
let arrs = [...Array(9999999).keys()]
let total = 0;

arrs.forEach(item=>{
	if(item == 10) return;
	total += item;
})
```

### map()方法
```javascript
/**
 * map(callbackFn)方法：
 * 		callbackFn的参数：
 * 			- element	数组中当前正在处理的元素
 * 			- index		正在处理的元素在数组中的索引
 * 			- array		调用了map()的数组本身
 * map(callbackFn,thisArg) 方法:
 * 			- thisArg	执行callbackFn是用作this的值
 */
```

```javascript
// 使用map()方法实现
let arrs2 = [1,2,3,4]

arrs.map((item,index,arr)=>{
	console.log("map:", item,index,arr);
})

// 使用map()方法实现数组*2功能
let newArrs = arrs.map(item=>{
	return item*2;
})

// 或可简写为:
let newArrs = arrs.map(item=>item*2)
console.log("newArrs:",newArrs);


// 更复杂的map操作
let objArrs = [
	{name:"华为", price:6999},
	{name:"苹果", price:9888},
	{name:"小米", price:2999},
]

let newObjArrs = objArrs.map((obj,idx,arr)=>{
	return obj.name;
})

console.log("newObjArrs:",newObjArrs);  // newObjArrs: ["华为","苹果","小米"]

let newObjArrs2 = objArrs.map(item=>{
	return {
		...item,		// item 展开为 key-value对
		price:item.price + "元",
		number:8888};
})
// 可简写如下, 对象外部需要增加()
let newObjArrs3 = objArrs.map(item=>({...item, price:item.price + "元",number:8888}))

let objArr4 = [
	{key:0, content:"篮球"},
	{key:1, content:"足球"},
	{key:2, content:"排球"}
]

// 通过使用{key,content} 对 item 进行解构 
let newObjArr4 = objArr4.map(({key,content})=>{
	return {
		value: key,
		text:content,
	}
})


// 异步请求数据
let arrsIdx = [1,2,3];
let datas = arrsIdx.map(async item=>{
	let res = await uni.request({
		url:"http://jsonplaceholder.typicode.com/posts/"+ item
	});
	return res;
})
Promise.all(datas).then(res=>{
	console.log(res);
})
```

### filter() 方法
 - filter() 使用方法同 map() 方法
 - 作用： 在filter回调函数中，满足true即可被处理到新函数中，false不做处理。
```javascript
let arrs = [5,7,8,15,22,1,2]
let newArrs = arrs.filter(item=>item > 10)

let objArrs = [
	{name:"张三",age:16},
	{name:"李四",age:40},
	{name:"王五",age:28},
	{name:"汤姆",age:20},
];
let newObjArr = objArrs.filter(({age})=>{
	return age > 20;
})

let idxArr = [6,1,2,3,5,3,6];
// indexOf 查找对应值的下标，只找到第一个
let index = idxArr.indexOf(6);
console.log("index:--->",index);

// indexOf 实现去重
let setRst = idxArr.filter((item,index,self)=>{
	return self.indexOf(item) == index;
})
console.log("setRst:",setRst);
```

### filter 和 map 的组合使用


```javascript
// filter 和 map 的 组合使用[链式调用]
let arrs6 = [
	{id:1,name:"HTML5"},
	{id:2,name:"Javascript"},
	{id:null,name:"小程序"},
	{name:"NodeJS"},
	{id:3,name:"VueJS"},
];

let newArr6 = arrs6.filter(item=>{
	return item.id;
}).map(item=>{
	return {
		...item,
		author: "nar",
	}
})

// 或简写为：
let newArr6 = arrs6.filter(item=>item.id).map(item=>({...item,author: "nar"}))
```

### every() 方法

```javascript
/**
 * every()方法：
 * 作用:判断数组中所有元素是否满足函数中给定的条件,全部满足返回true,只要有一项不满足则返回false.
 * 注意: every()方法只能作用于arr数组
 */

let arrs = [1,2,3,4,5];
let result = arrs.every(num=>num>0);
console.log(">0?",result);

let objArrs = [
	{name:"华为", price:6999,stock:true},
	{name:"苹果", price:9888,stock:true},
	{name:"小米", price:2999,stock:true},
	{name:"红米", price:899,stock:true},
];

// 判断是否所有产品都有库存true
let rst = objArrs.every(item=>item.stock && item.price>500);
console.log(rst);

// -----------------
// 更高级的使用方法:
// every() 处理 obj
import {computed, ref} from "vue";
const obj = ref({
	name:"",
	age:"",
	gender:"",
	like:"",
})

const state = computed(()=>{
	// if(obj.value.name && obj.value.age && obj.value.gender && obj.value.like){
	// 	return false;
	// }else{
	// 	return true;
	// }
	// 说明: every() 只用作用于数组类型
	// 如果 obj 想使用every(),必须先使用 Object.values(obj.value)方法, 将obj的值依次提取为数组["","","",""]
	return !Object.values(obj.value).every(item=>item);
})
```

### some()方法
```javascript
/**
 * some() 方法:
 * 功能：与 every() 相反；
 * 		some方法和every方法基本类似，只是some方法检测数组中，只要有一个满足条件即返回true, 全部不满足条件时才会返回false.
 */

let arrs = [1,2,3,4,5]
console.log(arrs.some(item=>item > 5));
```

### includes() 方法

```javascript
/**
 * include() 方法: 
 * 功能: 用于判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true, 否则返回false.
 * 注意: 只用用于检测基础数据类型(如数字、字符串、布尔值),不能用于检测包含对象或其他数组的二维数组。
 * 	- includes(searchElement)
 * 	- includes(searchElement, fromIndex)
 * 参数说明:
 * 	- searchElement 需要查找的值
 * 	- fromIndex 开始搜索的索引	
 */

// 1. 基础用法
const arrs = [1,2,3,true,"narglc"];
console.log(arrs.includes(2));
console.log(arrs.includes(true));
console.log(arrs.includes("narglc"));

// 2. every和includes配合,检测一个数组是否包含另一个数组
let arr1 = [1,2,3,4,5,6,7]
let arr2 = [2,5,7]
let arr3 = [1,6,9]
console.log("arr1中是否包含了arr2所有元素:",arr2.every(one=>arr1.includes(one)));
console.log("arr1中是否包含了arr3所有元素:",arr3.every(one=>arr1.includes(one)));

```


## promise 的使用 [处理异步]

### 什么是promise?
> promise是解决异步的方法，本质上是一个构造函数，可以用它实例化一个对象。对象身上有resolve、reject、all，原型上有then、catch方法。promise对象有三种状态：pending（初识状态/进行中）、resolved或fulfilled（成功）、rejected（失败） 作者：咸虾米_ https://www.bilibili.com/read/cv18799030/ 出处：bilibili

```javascript
	// promise使用
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
})
```

### promise的链式调用 [异步请求2.0版本]

```javascript
// promise 的链式调用 [异步请求2.0版本]
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
```

### Promise的异步请求同步化

```javascript
	uni.showLoading({
	title:"数据加载中..."
})

let p1 = getNav()
let p2 = getList(51)
let p3 = getComments(251)

Promise.all([p1,p2,p3]).then(res=>{
	uni.hideLoading();
	console.log(res);
})

```

### async/await 异步处理同步化
- await,async, 两个必须成对出现
- await 为阻塞请求
```javascript
onLoad(async ()=>{
	let id,res;
	
	// ES7 的await,async, 两个必须成对出现
	res = await getNav();		// 遇到 await 必须等待其执行完，即阻塞等待
	id = res.data[0].id
	
	res = await getList(id)
	id = res.data[0].id
	
	res = await getComments(id)
	console.log(res);
})
```
