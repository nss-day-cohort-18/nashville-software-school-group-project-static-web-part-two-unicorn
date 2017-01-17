// Create an array to hold your products.
// Each item in the array must be an object that contains 
// the following information: name, description, price, and URL for pony image.

const products = [

	{
		name: "Fancy Pants Pony",
		description: "Goat goose hen horse. Outhouse at nails mower.",
		price: "a bajillion dollars!",
		url: "../images/fancy-pants-pony.png"
	}, 
	{
		name: "Rarity",
		description: "Ewes mushrooms zucchini in forage Harvester. ",
		price: "a bajillion dollars!",
		url: "../images/rarity.png"
	}, 
	{
		name: "King Sombra",
		description: "Jelly peppers at plow basil swather, cat.",
		price: "a bajillion dollars!",
		url: "../images/king-sombra.png"
	}, 
	{
		name: "Party Favor",
		description: "Haybine carrots soybeans, owls duck.",
		price: "a bajillion dollars!",
		url: "../images/party-favor.png"
	}, 
	{
		name: "Sunburst",
		description: "Pegasus pop app app rainbows wereunicorn pegasus",
		price: "a bajillion dollars!",
		url: "../images/sunburst.png"
	}, 
	{
		name: "Apple Stars",
		description: "Pegasus pop social delight, unicorn suprise",
		price: "a bajillion dollars!",
		url: "../images/apple-stars.png"
	}, 
	{
		name: "Bacon Braids",
		description: "Unicorn kittens pop unicorn rainbows, rainbows app puppy unicorn",
		price: "a bajillion dollars!",
		url: "../images/bacon-braids.png"
	}, 
	{
		name: "Carrot Bun",
		description: "Social surprise rainbows pigeon delight unicorn pigeon",
		price: "a bajillion dollars!",
		url: "../images/carrot-bun.png"
	}, 
	{
		name: "Posh Pony",
		description: "Pigeon pigeon surprise wereunicorn, rainbows kittens",
		price: "a bajillion dollars!",
		url: "../images/posh-pony.png"
	}

];

//get div
const parent = document.getElementById("parent");

//iterate 
for (let pony in products) {

//get keys and access values
//and build up the string all at once

	let card = `<article 
				class="products"> 
				<h2>${products[pony].name}</h2> 
				<img src="${products[pony].url}" class="prod-pic" alt="goat">
				<p>Description:</p>
				<p>${products[pony].description}</p>
				<p>Price:</p>
				<p>${products[pony].price}</p>
				</article>`;

 //put it in the div 
 
		parent.innerHTML += card;
};

