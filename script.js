window.onload = function () {
    let elements = document.getElementsByClassName('tool__button')
    let input = document.getElementById('input');

    for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].innerHTML === '=') {
            //when button equal "=" add function calculate()
        } else {
            //when click button than add function addToCurrentValue()
        }
    }

    function addToCurrentValue(i) {
        return function () {
            if (elements[i].innerHTML === "÷") {
                input.innerHTML += "/";
            } else if (elements[i].innerHTML === "x") {
                input.innerHTML += "*";
            } else if (elements[i].innerHTML === 'C') {
                // clear input
            } else if (elements[i].innerHTML === 'Del') {
                // delete last character in input
            } else {
                input.innerHTML += elements[i].innerHTML;
            }
        };
    }

    function calculate() {
        return function () {
            input.innerHTML = eval(input.innerHTML).toLocaleString(undefined,
                { 'minimumFractionDigits': 0, 'maximumFractionDigits': 4 });
        };
    }

};