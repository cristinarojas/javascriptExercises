//Write a function that takes an array as an argument and prints out the numbers in the array that are greater than 5 
//(for example foo([3,6,1,7]) would print out 6 and 7) in Javascript 

var myArray = [3, 6, 1, 7];
 
function greateNumber(numbers) {
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] > 5) {
			console.log(numbers[i]);
		}
	}
 
}
 
greateNumber(myArray);
