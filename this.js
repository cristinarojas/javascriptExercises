/* Case 1: this insise a function */

// Return global object (window).
(function test() {
	console.log(this);
})();


// With "use strict" return undefined, because do not find an object.
(function test() {
	"use strict";
	console.log(this);
})();

/* Case 2: this inside a method, this refer to the object */

var person = {
	name: "cristina",
	age: 28,
	greet: function() {
		return "Hola, my name is " + this.name + " And I have " + this.age;
	}
};

console.log(person.greet());

/* Case 3: this inside a event handler, this refer to the HTML element that
shoot the event */

var button = document.getElementById('button');

button.addEventListener('click', function() { // Event listener 
	alert(this.textContent);
});

/* Case 4: this inside a constructor */
// Constructor is a function that define the object structure that other objects can be creates.









