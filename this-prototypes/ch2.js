'use strict';

// call site and call stack
// this.a refers to global variable a. this points to global object - default binding
// default binding will not work in strict mode
function foo() {
  console.log(this.a);
}

var a = 2;
foo(); // 2

// implicit binding
// this refers to context of obj
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

obj.foo(); // 2

// explicit binding
// forces this to be context of obj
function foo() {
  console.log(this.a);
}

var obj = { a: 2 };

foo.call(obj); // 2

// hard binding
// bind method binds foo to context of obj
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = { a: 2 };
var bar = foo.bind(obj);
var b = bar(3); // 2 3
console.log(b); // 5
