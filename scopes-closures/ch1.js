'use strict';

// What is scope? The relationship between engine, compiler, and scope

// Engine/scope conversation
function foo(a) {
  console.log(a); // 2
}
foo(2);

// LHS look-ups (assigning to a variable): a (foo(a)), b =, c =
// RHS look-ups (retrieving a value): a, a + b, 2
function foo(a) {
  var b = a;
  return a + b;
}
var c = foo(2);
