// script.js

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    
    switch (func) {
        case 'sin':
            display.value = Math.sin(value);
            break;
        case 'cos':
            display.value = Math.cos(value);
            break;
        case 'tan':
            display.value = Math.tan(value);
            break;
        case 'log':
            display.value = Math.log10(value);
            break;
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'exp':
            display.value = Math.exp(value);
            break;
    }
}
