//console.log('Hello')

let arr = ["apple", 0, '0', null, NaN, undefined, false, {}]

let result = arr.filter(item => item)// akkor pakolja az arrayba ha truthy!!!
console.log(result);