'use strict';

// spoofing class-orientation with prototype
// this.name adds name prop to each object during instantiation; adds property of a function to the prototype
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

var a = new Foo('a');
var b = new Foo('b');

a.myName(); // 'a'
b.myName(); // 'b'


// prototypal inheritance
// Bar prototype adopts properties of the Foo prototype
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
  return this.label;
}

var a = new Bar('a', 'obj a');
a.myName(); // 'a'
a.myLabel(); // 'obj a'
