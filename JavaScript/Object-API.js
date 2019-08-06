let obj = {
  name: 'zhh',
  age: 12
}

// Object.keys 返回对象的key的一个集合（数组）
console.log(Object.keys(obj))

// Object.values 返回对象的value的一个集合（数组）
console.log(Object.values(obj))

// [ [ 'name', 'zhh' ], [ 'age', 12 ] ]  返回一个二维数组
console.log(Object.entries(obj))