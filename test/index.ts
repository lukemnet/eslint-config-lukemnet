interface Person {
  name: string;
  age: number;
}

enum SamplePerson {
  name = "John Doe",
  age = 99,
}

function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);

function greeter(person: Person) {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeter(SamplePerson);
