# uniapp 笔记


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

