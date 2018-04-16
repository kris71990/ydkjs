'use strict';

// contextual this
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = 'hello, I\'m ' + identify.call( this );
  console.log( greeting );
}

var me = {
  name: 'Kyle',
};

var you = {
  name: 'Reader',
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER