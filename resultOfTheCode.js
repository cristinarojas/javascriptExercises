function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // Undefined and 2


// Interprete 
function test() {
	function foo() {
		return 2;
	}

	var a;

	console.log(a); // Unidefined
	console.log(foo()); // 2

	a = 1;
}