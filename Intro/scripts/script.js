/**
 *
 * Creat a helllo function
 * that prints your name on the console
 * call the function from the init function below
 */
function hello() {
  console.log("Oh Hi!");
}
function sayHello(name) {
  let lastName = "Thomas";
  console.log(`Hello ${name} ${lastName}!!!!`);
  // console.log("Hello" + "" + name + lastName + "!!!!");
}
function sum(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function exec1() {
  // Print numbers from 0 to 20 except 7 and 13
  for (let i = 0; i <= 20; i++) {
    if (i !== 7 && i !== 13) {
      console.log(i);
    }
  }

  let name = "";
  // Show an error if name is empty
  if (!name) {
    console.error("Name is required");
  }
}

function exec2() {
  // A - print every number in the array
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  // B - Sum all numbers and print result
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Result ${sum}`);

  // C - Print all numbers and print every negative number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      console.log(numbers[i]);
    }
  }
}

function init() {
  console.log("Intro Page Loaded");

  hello();

  let myName = "Tim";
  sayHello(myName); // Hello Tim!!!! - a function with a parameter

  let res = sum([21, 21, 21, 333]); // console log 42
  console.log(res);

  exec1();
  exec2();
}

window.onload = init; //Execute functions ONLY after the window has loaded
// Access the init fuction only when loaded.. init() gets fired instantly.
