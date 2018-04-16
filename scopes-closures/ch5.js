'use strict';

// closures - when a function is able to remember and access its lexical scope even when executing outside its lexical scope

// not really example of closure
function foo() {
  var a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}

foo();

// better example
// bar is executed from outside of its declared lexical scope and still retains access to a reference to its own scope, known as closure
function foo() {
  var a = 2;
  function bar() {
    console.log(a); // 2
  }
  return bar;
}

var baz = foo();
baz();

// another example
// baz is passed to bar and called from bar, its lexical scope still being within foo()
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz);
}

function bar(fn) {
  fn();
}

// closure can be seen in real time using a timer
// timer retains scope closure over wait
function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait('hello closure');

// closure seen in a module
// outer function invoked once, enclosing function returning an inner function that has closure over the private scope
function CoolModule() {
  var something = 'cool';
  var another = [1,2,3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join('!'));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = CoolModule();
foo.doSomething();
foo.doAnother();