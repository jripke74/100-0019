function greetUser(greetingPrefix, userName = 'user') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

greetUser('Hello', 'Jeff');
greetUser('Hello');
