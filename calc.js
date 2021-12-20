'use strict';

let a = '';
let b = '';
let sign = '';
let finish = false;


const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['÷', '×', '-', '+'];

function allClear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    result.textContent = 0;
}

const btnAllClear = document.querySelector('.calculator__AC');
const buttons = document.querySelector('.calculator__body');
const result = document.querySelector('.calculator__result');

buttons.addEventListener('click', (e) => {

    if (!e.target.classList.contains('calculator__number')) return;

    if (e.target.classList.contains('AC')) return allClear();

    if (result.textContent.length >= 7) {
        result.style.fontSize = '35px';
    }


    result.textContent = '';

    const key = e.target.textContent;

    if (digits.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            result.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            result.textContent = b;
        } else {
            b += key;
            result.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        if (key === '+' && a !== '' && b !== '' && (finish === false)) {
            a = (+a) + (+b);
            // b = key;
            result.textContent = a;
        }
        sign = key;
        result.textContent = sign;
        console.log(a, b, sign);
        return;
    }


    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '×':
                a = a * b;
                break;
            case '÷':
                a = a / b;
                break;
        }
        finish = true;
        result.textContent = a;
        console.log(a, b, sign);
    }
});


