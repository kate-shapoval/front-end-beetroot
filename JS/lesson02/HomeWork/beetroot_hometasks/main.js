let solveTask = (function () {
    let data = {
        selectorInputValue01: '.inp1',
        selectorInputValue02: '.inp2',
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
            return document.querySelector(selector)?.value || null
    }
    function calculate() {
        const inp = getValue(data.selectorInputValue01)
        const inp2 = getValue(data.selectorInputValue02)
        switch (data.typeTask) {
            case 'task1':
                return `Результат: ${Math.round((0.1 + 0.2) * 10) / 10}`
                break
            case 'task2':
                const value1 = '1'
                const value2 = 2
                return `Результат: ${(+value1) + value2}`
                break
            case 'countFiles':
                return `Кількість файлів файлів розміром 820 Мб: ${Math.floor((+inp) * 1000 / 820)}`
                break

            case 'taskNormal1':
                let count = Math.floor((+inp) / (+inp2))
                let rest = Math.round((((+inp) - (+inp2) * count)) * 100) / 100
                return `Кількість шоколадок: ${count}<br>Решта грошей: ${rest}`
                break
            case 'taskNormal2':
                let rezult = ''
                let number = inp
                do {
                    rezult += (number % 10) || ''
                    number = Math.floor(number / 10)
                } while (number)
                return `Число задом наперед: ${rezult}`
                break
            case 'taskMax2':
                return `${2 && 0 && 3}<br>${2 || 0 || 3}<br>${2 && 0 || 3}`
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
// Min Task1
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const btn1 = document.querySelector('.btn1')
btn1.onclick = () => {
    solveTask.solve({
        selectorOut: '.out1',
        typeTask: 'task1'
    })
}
// Min Task2
// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    solveTask.solve({
        selectorOut: '.out2',
        typeTask: 'task2'
    })
}

// Min Task3
// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp3',
        selectorOut: '.out3',
        typeTask: 'countFiles'
    })
}
// Normal Task1
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const btn4 = document.querySelector('.btn4')
btn4.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp4-1',
        selectorInputValue02: '.inp4-2',
        selectorOut: '.out4',
        typeTask: 'taskNormal1'
    })
}
// Normal Task2
// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const btn5 = document.querySelector('.btn5')
btn5.onclick = () => {
    solveTask.solve({
        selectorInputValue01: '.inp5',
        selectorOut: '.out5',
        typeTask: 'taskNormal2'
    })
}
// Max Task3
// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const btn6 = document.querySelector('.btn6')
btn6.onclick = () => {
    solveTask.solve({
        selectorOut: '.out6',
        typeTask: 'taskMax2'
    })
}