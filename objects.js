// const job = {
//   title: 'Developer',
//   location: 'New York',
//   salary: 188000,
// }

// console.log(new Date().toISOString());

// const job2 = {
//   title: 'Cook',
//   location: 'New York',
//   salary: 50000,
// }

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job('Developer', 'New York', 188000);
const cook = new Job('Cook', 'Munich', 35000);

developer.describe();
cook.describe();
