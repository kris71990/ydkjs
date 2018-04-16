'use strict';

//pseudocode for class spoofing and inheritance
class Vehicle {
  engines = 1;
  ignition() {
    output('Turning on my engine');
  }
  drive() {
    ignition();
    output('Steering and moving forward');
  }
}

class Car inherits Vehicle {
  wheels = 4;
  drive() {
    inherited:drive();
    output(`Rolling on all ${wheels} wheels`);
  }
}

class SpeedBoat inherits Vehicle {
  engines = 2;
  ignition() {
    output(`Turning on all ${engines} engines`)
  }
  pilot() {
    inherited:drive();
    output('Speeding through the water with ease');
  }
}

// mixin
// Car is 'extending' Vehicle by adding its properties
function mixin(sourceObj, targetObj) {
	for (var key in sourceObj) {
		if (!(key in targetObj)) {
			targetObj[key] = sourceObj[key];
		}
	}
	return targetObj;
}

var Vehicle = {
	engines: 1,

	ignition: function() {
		console.log('Turning on my engine.');
	},

	drive: function() {
		this.ignition();
		console.log('Steering and moving forward!');
	}
};

var Car = mixin( Vehicle, {
	wheels: 4,

	drive: function() {
		Vehicle.drive.call(this);
		console.log(`Rolling on all ${this.wheels} wheels!`);
	}
} );