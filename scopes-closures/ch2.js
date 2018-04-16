'use strict';

// Lexical scope 

// three nested scopes
function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}

foo(2); // 2 4 12

// cheating lexical scope
// modifying existing lexical scope by evaluating a string - bad practice
function foo(str, a) {
  eval(str);
  console.log(a, b);
}

var b = 2;
foo('var b = 3;', 1); // 1 3

// using with, which has been deprecated - bad practice
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

obj.a = 2;
obj.b = 3;
obj.c = 4;

// becomes

with (obj) {
  a = 3;
  b = 4;
  c = 5;
}

// ex.
function foo(obj) {
  with(obj) {
    a = 2;
  }
}

var o1 = { a: 3 };
var o2 = { b: 3 };

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 - leaked global 
