const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored

hobbies.push('Reading'); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping']; // not allowd! new address is stored

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
