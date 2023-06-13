//Примітивні
console.log(typeof 19)//number
console.log(typeof 'hjhjhk')//string
console.log(typeof true)//Boolean
console.log(typeof false)//Boolean
console.log(typeof (0 > -1))//Boolean
//Boolean 0 i все що нижче дає false
console.log(Boolean(0 > -1))
//null, NaN, undefined = false
let b;
console.log(b)//undefined
//console.log(a)//null
console.log(1 * "hhs")//NaN
console.log(typeof null)//object
console.log(typeof undefined)//undefined

console.log(typeof 10n)
console.log(typeof Symbol('id'))

//не Примітивні
function test() { }
let arr = []
let obj = {}
console.log(typeof test)
console.log(typeof arr)
console.log(typeof obj)