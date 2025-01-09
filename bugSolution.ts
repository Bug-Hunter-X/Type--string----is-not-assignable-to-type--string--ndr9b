function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Concatenate array elements
let userName = user.join(" ");
console.log(greeter(userName));

// Solution 2: Handle array input explicitly
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));

// Solution 3: Use a generic function
function greeterGeneric<T>(person: T): string {
  return `Hello, ${person}`;
}
console.log(greeterGeneric(user));
console.log(greeterGeneric("Jane Doe"));