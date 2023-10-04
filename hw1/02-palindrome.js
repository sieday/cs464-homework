const elem = document.querySelector('input');
elem.addEventListener('input', handleInput);
const output = document.querySelector('.output');

function handleInput() {
  const user_input = elem.value;
  return palindrome_check(user_input);
}

function palindrome_check(user_input) {
  if (user_input < 0) {
    return input_err();
  } else if (user_input === '') {
    return input_err();
  } else if (
    user_input.toString() === user_input.toString().split('').reverse().join('')
  ) {
    return pali();
  } else {
    return non_pali();
  }
}

function non_pali() {
  output.style.color = 'red';
  output.innerHTML = 'No. Try Again';
  console.log('False');
  return;
}

function pali() {
  output.style.color = 'green';
  output.innerHTML = 'Yes. This is a palindrome!';
  console.log('True');
  return;
}

function input_err() {
  output.style.color = 'red';
  output.innerHTML = 'Error. Please enter a positive number.';
  console.log('False');
  return false;
}
