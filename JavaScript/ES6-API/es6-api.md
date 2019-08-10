# ES6 api

## 1. reduce的用法

> 介绍： 它永远返回一个值，这个值可以是数字、字符串、数组或对象，但它始终只能是一个。
reducer 对于很多场景都很适用，但是它们对于**将一种逻辑应用到一组值中并最终得到一个单一结果**的情况特别适用

### 1.1 需求： 给定一个长度为n的数组，数组中包含n个数字,求n个数字的和

```js
    // 初始方法
    const nums = [1, 2, 3];
    let value = 0;
    
    for (let i = 0; i < nums.length; i++) {
        value += nums[i];
    }
```

```js
    // es6中reduce简化
    /* 简化1 -> reduce使用*/
    const nums1 = [1, 2, 3];
    const initialValue1 = 0;
    reducer1 = function (acc, item) { 
        return acc + item;
    }
    const total1 = nums1.reduce(reducer1, initialValue1);
    
   /* 简化2 -> 箭头函数使用*/
   const nums2 = [1, 2, 3];
   const initialValue2 = 0;
   const reducer2 = (acc, item) => { 
       return acc + item;
   }
   const total2 = nums2.reduce(reducer2, initialValue2);
   
    /* 简化3 -> 箭头函数省略{},单行显示，默认return*/
    const nums3 = [1, 2, 3];
    const initialValue3 = 0;
    const reducer3 = (acc, item) => acc + item;
    const total3 = nums3.reduce(reducer3, initialValue3);
    
    /* 简化4 -> 直接设置初始值*/
    const nums = [1, 2, 3];
    const total = nums.reduce((acc, item) => acc + item, 0);
```

### 1.2 mnd介绍

```text
 # 1. api
 arr.reduce(callback(accumulator, currentValue[, index[, array]]),[ initialValue])
 # 2. 参数介绍
 callback:
     一个函数，对数组中的每个元素执行（第一个除外，如果没有initialValue提供），取四个参数
 
 accumulator:
    累加器累积回调的返回值。它是先前在回调调用中返回的累计值，或者initialValue
    
 currentValue:
    当前元素在数组中处理
    
 index: [可选]
    数组中正在处理的当前元素的索引。如果initialValue提供了索引，则从索引0开始。否则，从索引1开始。
    
 initialValue: [可选]
    一个值，用作第一次调用的第一个参数callback。如果未initialValue提供，则将使用并跳过数组中的第一个元素。调用reduce()一个没有的空数组initialValue会抛出一个TypeError
    
 callback返回值：
    计算结果的数据值
    
```

### 1.3使用案例

> 假设您有一个数字数组，并且希望返回一个报告这些数字在数组中出现的次数的对象。请注意，这同样适用于字符串。

```js
const nums = [3, 5, 6, 82, 1, 4, 3, 5, 82];
// 将一个空对象作为最终得到的单一结果
// tally是那个单一结果（对象）
// 三目元算符  
// 首先去判断单一结果（对象）中是否有这个数组的这一项  如果没有 就将当前此时数组的这一项设置为单一结果的key，value为1
// 如果有就将当前单一结果的key对应的value值++  起到计数作用
const result = nums.reduce((tally, amt) => {
    tally[amt] ? tally[amt]++ : tally[amt] = 1
    return tally
}, {})

console.log(result)
//{ '1': 1, '3': 2, '4': 1, '5': 2, '6': 1, '82': 2 }

```
