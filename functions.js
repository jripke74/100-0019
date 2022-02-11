function greetUser(greetingPrefix, userName = 'user') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

greetUser('Hello', 'Jeff');
greetUser('Hello');

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 2, 3, 5, 10, 11];

console.log(sumUp(...inputNumbers));
