'use strict';

// function scopes

// global scope
function foo(a) {
  // scope for foo
  var b = 2;

  function bar() {
    // scope for bar
  } 

  var c = 3;
}

////

function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}

var b;
doSomething(2);
// is better written as
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b;
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

doSomething(2);
// because b and doSomethingElse are hidden within the scope of doSomething, which is helpful both for privacy and collision avoidance (seen below)
// in bar, i is reassigning the value of i in the enclosing scope's for loop rather than declaring a different variable
function foo() {
  function bar(a) {
    i = 3;
    console.log(a + 1);
  }
  for (var i = 0; i < 10; i++) {
    bar(i * 2);
  }
}

// functions as scopes
var a = 2;
function foo() {
  var a = 3;
  console.log(a); // 3
}
foo();
console.log(a); // 2

// immediately invoked function expression
var a = 2;
(function foo() {
  var a = 3;
  console.log(a); // 3
})();
console.log(a); // 2

// blocks as scopes, as in
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// javascript had no true block scope functionality until ES6 - let and const
if (foo) {
  let bar = foo * 2;
  const foobar = 12;
  bar = somcething(bar);
  console.log(bar);
}
console.log(bar) // ReferenceError because bar is scoped to the if block
console.log(foobar) // ReferenceError for same reason
