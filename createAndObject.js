// Create an object that has properties with name = "Cristina" and major="Develop" and 
// a property that is a function that takes 2 numbers 
// and returns the smallest of the two, or the square of the two if they are equal.

var myObject = {
	name: "Cristina",
	major: "Develop",
	smallest: function(num1, num2) {
		if(num1 === num2) {
			return num1 * num2;
		} else {
			if (num1 < num2) {
				return num1
			} else {
				num2;
			}
		}
	}
}

myObject.smallest(2, 5);