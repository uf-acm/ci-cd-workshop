const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultSpan = document.getElementById('result');

function updateResult() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operator = operatorSelect.value;

  if (operator === 'add') {
    resultSpan.textContent = add(num1, num2);
  } else {
    resultSpan.textContent = subtract(num1, num2);
  }
}

num1Input.addEventListener('input', updateResult);
num2Input.addEventListener('input', updateResult);
operatorSelect.addEventListener('change', updateResult);

updateResult();