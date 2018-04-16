'use strict';

// Delegation oriented design - no classes, simply objects linked to other objects (OLOO)
var Task = {
  setId: function(ID) { this.id = ID; },
  outputID: function() { console.log(this.id); },
};

var XYZ = Object.create(Task);
XYZ.prepareTask = function(ID, Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};


// Implementing class design without any class syntax
function Widget(width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function($where) {
  if(this.$elem) {
    this.$elem.css({
      width: this.width + 'px',
      height: this.height + 'px'
    }).appendTo($where);
  }
};

function Button(width, height, label) {
  Widget.call( this, width, height );
  this.label = label || 'Default';

  this.$elem = $('<button>').text(this.label);
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = function($where) {
  Widget.prototype.render.call(this, $where);
  this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick = function(e) {
  console.log('Button \'' + this.label + '\' clicked!');
};

$( document ).ready( function(){
  var $body = $( document.body );
  var btn1 = new Button( 125, 30, 'Hello');
  var btn2 = new Button( 150, 40, 'World');

  btn1.render($body);
  btn2.render($body);
});