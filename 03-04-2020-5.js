//5a. Create a function to sum two numbers and return the value. 
function sum(a, b) {
	var ans = parseInt(a) + parseInt(b);
	window.alert(a + " + " + b + " = " + ans);
}

//5b. Create a function to generate a random number between 0 to 10
function random() {
    return Math.round(Math.random() * 10);
}

//5c. Pass two values to the sum function, But first value should be passed by the user and the second value should be generated by a random function.
var a = prompt("Enter Operand 1");
sum(a, random());
