// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).

let str = "madam";
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome(str));

// Write a JavaScript function that removes duplicates from an array.
// input  ⁠= [1,  2,  “hello”,  “world”,  { name: “Alice”, age: 30 },  { name: “Alice”, age: 30 },   [1, 2, 3],  [1, 2, 3],  “hello”,  3,  [4, 5, { nested: “object” }],  [4, 5, { nested: “object” }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]

let removeDuplicate = [
  1,
  2,
  "hello",
  "world",
  { name: "Alice", age: 30 },
  { name: "Alice", age: 30 },
  [1, 2, 3],
  [1, 2, 3],
  "hello",
  3,
  [4, 5, { nested: "object" }],
  [4, 5, { nested: "object" }],
  { nested: [1, 2, 3] },
  { nested: [1, 2, 3] },
];

function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.findIndex (other => JSON.stringify(other)
  === JSON.stringify(value)) === index);
}
console.log(removeDuplicates(removeDuplicate));

// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.
class Animal {
  speak() {
    console.log("Animal says hello");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks!");
  }
}

let dog = new Dog();
console.log(dog.speak());


// ⁠Write JavaScript code to create a new HTML element, add it to the DOM, and attach an event listener to it.
document.createElement("h1");
document.addEventListener("DOMContentLoaded", function () {
  let h1 = document.createElement("h1");
  h1.innerHTML = "hello world";
  document.body.appendChild(h1);
});
