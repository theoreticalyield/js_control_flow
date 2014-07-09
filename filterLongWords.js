var maxLength = 6;
var inst = ["guitar", "drums", "cowbell", "bass", "keyboard", "harmonica"];
var rightLength = [];


for (var i = 0; i < inst.length; i += 1) {
	if (inst[i].length < maxLength) {
		rightLength.push(inst[i]);
	}
}

console.log(rightLength)