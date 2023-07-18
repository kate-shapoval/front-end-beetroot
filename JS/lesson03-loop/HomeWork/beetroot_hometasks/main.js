
let solveTask = (function () {
    let data = {
        selectorInputValue01: '.inp1',
        selectorInputValue02: '.inp2',
        selectorInputValue03: '.inp3',
        selectorOut: '.out',
        selectorAction: '.btn',
        typeTask: '',
        someDetail: true
    }
    function init(dataNew) {
        Object.assign(data, dataNew)
    }
    function output() {
        const out = document.querySelector(data.selectorOut)
        out.innerHTML = calculate()
    }
    function getValue(selector) {
        if (selector)
            return document.querySelector(selector)?.value || null
    }
    function multiply() {
        let template = ''
        for (let i = 2; i < 10; i++) {
            template += `<div>`
            for (let j = 1; j < 11; j++) {
                template += `${i} * ${j} = ${i * j}<br>`
            }
            template += `</div>`

        }
        return template
    }
    function nextDate(day, month, year) {
        const month31 = [1, 3, 5, 7, 8, 10, 12]
        const month28 = 2
        const month30 = [4, 6, 9, 11]
        const vysokosYear = (year % 4 === 0) ? true : false;
        const daysFebruary = (vysokosYear) ? 29 : 28;

        //if ((!day && !month && !year)) return 'input correct date'
        if (month > 12) return 'wrong month'

        if ((month31.includes(month) && day > 31) ||
            (month30.includes(month) && day > 30) ||
            (month === month28 && day > daysFebruary)) return 'wrong day'

        if ((month30.includes(month) && day < 30) ||
            (month === month28 && day < daysFebruary) ||
            (month31.includes(month) && day < 31)) day++

        if ((month === month28 && day === daysFebruary) ||
            (month30.includes(month) && day === 30) ||
            (month31.includes(month) && day === 31)) {
            day = 1
            month = (month === 12) ? 1 : month + 1
            year++
        }

        return `Next date: ${day}.${month}.${year}`
    }
    function gameFindNumber(flag, min, max) {
        let interval = [0, 100]
    }
    function calculate() {
        const inp = getValue(data.selectorInputValue01)
        const inp2 = getValue(data.selectorInputValue02)
        const inp3 = getValue(data.selectorInputValue03)
        switch (data.typeTask) {
            case 'task1':
                return gameFindNumber(data.someDetail, +inp, +inp2)
                break
            case 'task2':
                return multiply()
                break
            case 'nextDate':
                return nextDate(+inp, +inp2, +inp3)
                break

            default:
                return 'Unknow task'
                break
        }

    }
    function solve(dateNew) {
        init(dateNew)
        output()
    }
    return {
        solve: solve
    };
})();
// Min Task1
// Гра «Вгадай число». 
const btn11 = document.querySelector('.btn11')
const btn12 = document.querySelector('.btn12')
let interval = [0, 100]
btn11.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp11',
        selectorInputValue02: '.inp12',
        selectorOut: '.out1',
        typeTask: 'task1',
        someDetail: true,
    })
}
btn12.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp11',
        selectorInputValue02: '.inp12',
        selectorOut: '.out1',
        typeTask: 'task1',
        someDetail: false,
    })
}
// Min Task2
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    solveTask.solve({
        selectorOut: '.out2',
        typeTask: 'task2'
    })
}

// Min Task3
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp31',
        selectorInputValue02: '.inp32',
        selectorInputValue03: '.inp33',
        selectorOut: '.out3',
        typeTask: 'nextDate'
    })
}