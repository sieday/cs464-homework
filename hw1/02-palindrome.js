const elem = document.querySelector('input');
elem.addEventListener('input', palindromeCheck);
const output = document.querySelector('.output');

function palindromeCheck() {
  const userInput = elem.value;
  if (userInput < 0) {
    return inputError();
  }
  if (
    userInput.toString() === userInput.toString().split('').reverse().join('')
  ) {
    return palindrome();
  }
  return notPalindrome();
}

function notPalindrome() {
  output.style.color = 'red';
  output.innerHTML = 'No. Try Again';
  return;
}

function palindrome() {
  output.style.color = 'green';
  output.innerHTML = 'Yes. This is a palindrome!';
  return;
}

function inputError() {
  output.style.color = 'red';
  output.innerHTML = 'Error. Please enter a positive number.';
  return;
}
