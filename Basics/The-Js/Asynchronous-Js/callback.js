// Basic Callback Function
// A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation has been completed.

function greet(name, callback) {
  console.log("hi " + name);
  callback();
}

function sayBye() {
  console.log("bye");
}

greet("yahya", sayBye);

function printName(callback) {
  let fname = "mohammed";
  let lname = "yahya";
  callback(fname, lname);
}

printName((fname, lname)=>console.log(`My name is ${fname} ${lname}`))

// =====================
// Callback in setTimeout() (Asynchronous)

console.log("start");

// setTimeout(function(){
//     console.log("middle");
// }, 2000);
setTimeout(function () {
  console.log("middle");
}, 0); // same result as above

console.log("end");
// The callback function inside setTimeout() executes after 2 seconds, demonstrating asynchronous behavior.

// =====================
// Callback in Array Methods (forEach)

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num, i, arr) {
  console.log(num, i, arr);
});
numbers.forEach(console.log); // demonstrates how parameters are passed to the callback function
// the callback function parameter is passed inside the .forEach() method declaration
// =====================
// Callback in Asynchronous API Request (Simulated)
function fetchData(callback) {
  console.log("fetching data...");
  setTimeout(function () {
    data = { name: "yahya" };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log("Received data:", data);
}

fetchData(displayData);

// =====================
// Problems with Callbacks (Callback Hell)
function step1(callback) {
  setTimeout(function () {
    console.log("step 1");
    callback();
  });
}
function step2(callback) {
  setTimeout(function () {
    console.log("step 2");
    callback();
  });
}
function step3(callback) {
  setTimeout(function () {
    console.log("step 3");
    callback();
  });
}

step1(() => {
  step2(() => {
    step3(
      () => {
        console.log("done");
      } // callback function
    );
  });
});
// To avoid callback hell, use Promises or async/await.
// =====================
