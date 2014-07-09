// Conditionals and Loops

// Use the product search result in your file to check the following:

// 1.) The kind of results you're are dealing are shopping#products. 
// Go through the items and find all results that have kind of shopping#product. 
// How many are there? Where else is this count information stored in the search results?
// 2.) Find all items with a backorder availability in inventories.
// 3.) Find all items with more than one image link.
// 4.) Find all canon products in the items (careful with case sensitivity).
// 5.) Find all items that have product author name of "eBay" and are brand "Canon".
// 6.) Print all the products with their brand, price, and a image link



var data = require("./products.json")

// Write your solutions below

// 1.) The kind of results you're are dealing are shopping#products.

console.log(data["items"].length);

 var items = data['items'];
 //var instance = 0;

for (var i = 0; i < data["items"].length; i += 1) {
  if (items[i]["kind"] === "shopping#product"){
  	instance += 1;
  }
}

// number of items also listed at top of file

console.log(instance)

console.log(data["items"]);

// 2.) Find all items with a backorder availability in inventories.

for (var i = 0; i < items.length; i += 1) {
	if (items[i]['inventories']['availability'] === 'backorder') {
	    console.log(items[i]);
	}
}

// 3.) Find all items with more than one image link.




// 4.) Find all canon products in the items (careful with case sensitivity).

// var cameras = data['items'];
var camInstance = 0;

for (var i = 0; i < items.length; i += 1) {
	if (items[i]['product']['brand'] === 'Canon') {
	    console.log(items[i]);
	    camInstance += 1;
		}
}
		console.log(camInstance)

// // 5.) Find all items that have product author name of "eBay" and are brand "Canon".
// var authorInstance = 0;

for (var i = 0; i < items.length; i += 1) {
	if (items[i]['product']['author']['name'] === 'eBay') {
	    authorInstance += 1;
	    console.log(items[i]['product']['author']);
	}
}

// console.log(authorInstance);


// 6.) Print all the products with their brand, price, and a image link












