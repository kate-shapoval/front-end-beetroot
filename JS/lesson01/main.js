//defer - чекає прогрузку html
//async - синхронна підгрузка (коли є декілька файлів js)

// console.log("Test") //вивод в console
//console.log("Test");

// old
//alert('Test') // виводить в модальне вікно і завжди зєявляється при поновленні сторінки
//document.write("Test") // виводить в кінець html


//var let const

// var a = 4
// var a = 6

// let a = 4
// let a = 6 // error
// a = 10
// a = "'dsdf'"
// console.log(a)
// const b = 1
//b = 3 // error
//b = 'dsf'//error
// console.log(b)

// let snake_case = 20
// const COLOR_RED = 99
// const _apiKey = 'fjdsfhsdjkfhsd@!jhg'
// let camelCase = 'hfsdhfsjdfh'

//=== Вивід данних ===
// let out = document.querySelector('.out')
// out.innerHTML = 'Hello'
//out.innerHTML = '<h1 class="title">Hello</h1>'
// console.log(out)

//=== Ввід данних ===

//old
// let pr1 = +prompt("First number")
// let pr2 = +prompt("Second number")

//right method
// let inp1 = document.querySelector('.inp1')
// let inp2 = document.querySelector('.inp2')
// let btn = document.querySelector('.btn')
// //console.log(btn)

// let out1 = document.querySelector('.out1')
// btn.onclick = () => {
//     out1.innerHTML = +inp1.value + +inp2.value
// }

// let inp11 = document.querySelector('.inp11')
// let btn2 = document.querySelector('.btn2')
// //console.log(btn)

// let out2 = document.querySelector('.out2')
// btn2.onclick = () => {
//     out2.innerHTML = +inp11.value * 45
// }
let solveTask = (function () {
    let date = {
        selectorInputValue01: '.inp1',
        selectorInputValue02: '.inp2',
        selectorOut: '.out',
        selectorAction: '.btn'

    }
    function init(dateNew) {
        Object.assign(date, dateNew)
    }
    function output() {
        const out = document.querySelector(date.selectorOut)
        const btn = document.querySelector(date.selectorAction)
        btn.onclick = () => {
            out.innerHTML = calculate()
        }
    }
    function getValue(selector) {
        if (selector)
            return document.querySelector(selector).value
    }
    function calculate() {
        const inp = getValue(date.selectorInputValue01)
        return +inp * 45

    }
    function solve(dateNew) {
        init(dateNew)
        output()
    }
    return {
        solve: solve
    };
})();

dateTask2 = {
    selectorInputValue01: '.inp11',
    selectorOut: '.out2',
    selectorAction: '.btn2'
}
solveTask.solve(dateTask2)