// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..

function pluralize(noun, num) {
	if (num > 1 || num < 1) {
		console.log(num + " " + noun + "s")
	}
	else {
		console.log(num + " " + noun)
	}
}
pluralize("beer", 99);
pluralize("pizza", 0);
pluralize("coffee", 1);

