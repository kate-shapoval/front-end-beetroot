let solveTask = (function () {
    let data = {
        selectorInputValue01: '.inp1',
        selectorInputValue02: '.inp2',
        selectorInputValue03: '.inp3',
        selectorInputValue04: '.inp4',
        selectorOut: '.out',
        selectorAction: '.btn',
        typeTask: ''
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
            return document.querySelector(selector).value
    }
    function calculate() {
        const inp = getValue(data.selectorInputValue01)
        const inp2 = getValue(data.selectorInputValue02)
        switch (data.typeTask) {
            case 'hello':
                return `Привіт, ${inp}`
                break
            case 'calculateAge':
                return `Вік: ${2023 - (+inp)}`
                break
            case 'areaSquare':
                return `Площа квадрата: ${Math.round((+inp) ** 2)}`
                break

            case 'areaCircle':
                return `Площа кола: ${Math.round(3.14 * (+inp) ** 2)}`
                break
            case 'calculateSpeed':
                return `Швидкість: ${Math.round((+inp) / (+inp2))}км/год`
                break
            case 'converterUSD':
                return `${Math.round((+inp) * 36.7)}грвн.`
                break
            default:
                return 'Unknow task'
                break
        }
        return +inp * 100

    }
    function solve(dateNew) {
        init(dateNew)
        output()
    }
    return {
        solve: solve
    };
})();
// Normal Task1
// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const btn1 = document.querySelector('.btn1')
btn1.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp1',
        selectorOut: '.out1',
        typeTask: 'hello'
    })
}
// Normal Task2
// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp2',
        selectorOut: '.out2',
        typeTask: 'calculateAge'
    })
}

// Normal Task3
// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp3',
        selectorOut: '.out3',
        typeTask: 'areaSquare'
    })
}
// Max Task1
// Запитай у користувача радіус кола і виведи площу такої окружності.
const btn4 = document.querySelector('.btn4')
btn4.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp4',
        selectorOut: '.out4',
        typeTask: 'areaCircle'
    })
}
// Max Task2
// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const btn5 = document.querySelector('.btn5')
btn5.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp5-1',
        selectorInputValue02: '.inp5-2',
        selectorOut: '.out5',
        typeTask: 'calculateSpeed'
    })
}
// Max Task3
// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const btn6 = document.querySelector('.btn6')
btn6.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp6',
        selectorOut: '.out6',
        typeTask: 'converterUSD'
    })
}