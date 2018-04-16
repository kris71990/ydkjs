'use strict';

// Hoisting

a = 2;
var a;
console.log(a); 
// 2 because var is created first by the compiler before it is assigned a value

// foo's declaration is hoisted, within foo, console.log is called before a variable has been defined
foo();
function foo() {
  console.log(a); // undefined
  var a = 2;
}

// functions are hoisted first ahead of variables
foo();

var foo;

function foo() {
  console.log(1);
}

foo = function() {
  console.log(2);
}
// is interpreted by the engine as
function foo() {
  console.log(1);
}

foo(); // 1

foo = function() {
  console.log(2);
}