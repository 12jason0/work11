let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let op = document.getElementById('op');
let result = document.getElementById('result');

function re2(value1, value2, op) {
    value1 = Number(document.getElementById('value1').value);
    value2 = Number(document.getElementById('value2').value);
    op = document.getElementById('op').value;

    if (op === '+') {
        document.getElementById('result').value = value1 + value2;
    } else if (op === '-') {
        document.getElementById('result').value = value1 - value2;
    } else if (op === '/') {
        document.getElementById('result').value = value1 / value2;
    } else if (op === '*') {
        document.getElementById('result').value = value1 * value2;
    } else {
        document.getElementById('result').value = '잘못된 방식입니다';
    }
}
function op2() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('op').value = '';
    document.getElementById('result').value = '';
}
