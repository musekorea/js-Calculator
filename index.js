const numBtns = document.querySelectorAll('.numBtn');
const result = document.querySelector('#result');
const opBtns = document.querySelectorAll('.opBtn');
const equalBtn = document.querySelector('.equalBtn');
const clearBtn = document.querySelector('.clearBtn');
const delBtn = document.querySelector('.delBtn');

let firstNum = '';
let firstDone = false;
let secondNum = '';
let secondDone = false;
let thirdNum = '';
let operator = '';

const operation = () => {
  switch (operator) {
    case '+':
      return (result.value = Number(firstNum) + Number(secondNum));
    case '-':
      return (result.value = Number(firstNum) - Number(secondNum));
    case '*':
      return (result.value = Number(firstNum) * Number(secondNum));
    case '/':
      return (result.value = Number(firstNum) / Number(secondNum));
    default:
      return;
  }
};

delBtn.addEventListener('click', (e) => {
  let nums = result.value.slice(0, -1);
  if (nums.length < 1) {
    result.value = `0`;
  } else {
    result.value = nums;
  }
  if (firstDone === false) {
    firstNum = nums;
  } else if (firstDone === true && secondDone === true) {
    secondNum = nums;
  } else if (firstDone === true && secondDone === false) {
    firstNum = nums;
  }
});

clearBtn.addEventListener('click', (e) => {
  firstNum = '';
  firstDone = false;
  secondNum = '';
  secondDone = false;
  operator = '';
  thirdNum = '';
  result.value = '0';
});

equalBtn.addEventListener('click', () => {
  if (firstDone === false) {
    return;
  } else if (firstDone === true && secondDone === false && thirdNum) {
    //추가 했음
    console.log('여기');
    secondNum = thirdNum;
    result.value = operation();
    firstNum = operation();
    secondNum = '';
    return;
  } else if (firstDone === true && secondDone === true) {
    result.value = operation();
    firstNum = operation();
    firstDone = true;
    secondDone = false;
    thirdNum = secondNum;
    secondNum = '';
  } else {
    return;
  }
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener('click', (e) => {
    if (firstDone === false) {
      firstDone = true;
    }
    if (firstDone === true && secondDone === true) {
      result.value = operation();
      firstNum = operation();
      secondDone = false;
      secondNum = '';
    }
    operator = opBtn.value;
    thirdNum = '';
    //추가했음
  });
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', (e) => {
    if (firstDone === false) {
      firstNum = firstNum + numBtn.value;
      result.value = firstNum;
    } else {
      secondNum = secondNum + numBtn.value;
      result.value = secondNum;
      secondDone = true;
    }
  });
});
