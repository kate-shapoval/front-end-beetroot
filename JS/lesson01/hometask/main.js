let solveTask = (function () {
    let date = {
        selectorInputValue01: '.inp1',
        selectorInputValue02: '.inp2',
        selectorInputValue03: '.inp3',
        selectorInputValue04: '.inp4',
        selectorOut: '.out',
        selectorAction: '.btn'

    }
    function init(dateNew) {
        Object.assign(date, dateNew)
        console.log(date)
    }
    function output() {
        const out = document.querySelector(selectorOut)
        const btn = document.querySelector(selectorAction)
        btn.onclick = () => {
            out.innerHTML = calculate()
        }
    }
    function getValue(selector) {
        if (selector)
            return document.querySelector(selector).value
    }
    function calculate() {
        const inp = getValue(selectorInputValue01)
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

dateTask1 = {
    selectorInputValue01: '.inp1',
    selectorOut: '.out1',
    selectorAction: '.btn1'
}
solveTask.solve(dateTask1)
