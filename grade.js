//Output the following letter grade from a variable with with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a switch statement.


var score = 85


switch (true) {

	case score >= 90:
		console.log("Your grade is: A");
		break;

	case score > 79 && score < 90:
		console.log("Your grade is: B");
		break;

	case score > 69 && score < 80:
		console.log("Your grade is: C");
		break;

	case score > 59 && score < 70:
		console.log("Your grade is: D");
		break;

	case score <= 59:
		console.log("Your grade is: E");
		break;
  }


