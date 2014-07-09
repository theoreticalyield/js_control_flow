var inputString = "building"
var inputArray = inputString.split("")
var rev = []
console.log(inputArray)

// for (var i = inputArray.length; -= 1;
// 	console.log(inputArray[]);


for (var i = 0; i < inputArray.length; i += 1){
	console.log(inputArray[i])
	rev.unshift(inputArray[i])
}
	console.log(rev)
	rev = rev.join("")
	console.log(rev)