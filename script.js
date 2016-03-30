$(function(){
	// fruit prices
	var applePrice = 5;
	var orangePrice = 5;
	var bananaPrice = 5;
	var grapePrice = 5;
	var priceArray = [applePrice, orangePrice, bananaPrice, grapePrice];

	// update price display at the start rather than waiting 15 seconds
	displayPrices();

	// start of timing function
	setInterval(function(){
		// loop through fruit prices and determine direction and price fluctation for each
		for(var it = 0; it<priceArray.length; it++){
			var priceFluctuation= randomNumber(1,50)/100;
			var direction= randomNumber(1,2);

			var maxPrice = 9.99 - priceFluctuation;
			var minPrice = 0.50 + priceFluctuation;

			if(priceArray[it] > maxPrice){
				direction = 2;
			}
			else if(priceArray[it] < minPrice){
				direction = 1;
			}

			if(direction == 1){
				priceArray[it] += priceFluctuation;
			}
			else {
				priceArray[it] -= priceFluctuation;
			}
			priceArray[it] = Math.round(priceArray[it]*100)/100;
		}

		// update html display
		displayPrices();
	},15000);

	// instantiate user object
	var user = {
		totalCash: 100,
		numApples: 0,
		numOranges: 0,
		numBananas: 0,
		numGrapes: 0,
		avgApple: 0,
		avgOrange: 0,
		avgBanana: 0,
		avgGrape: 0,
		appleArray: [],
		orangeArray: [],
		bananaArray: [],
		grapeArray: []
	};

	// update html display of user properties
	updateUserCash();

	// buy buttons
	$("#buyApple").on('click',function(){
		// if the user has enough money, purchase the fruit and add to object and array
		if(user.totalCash >= 0 + priceArray[0]){
			user.totalCash -= priceArray[0];
			user.numApples++;
			// calculate average purchase price
			user.appleArray.push(priceArray[0]);
			var appleTotal = 0;
			for(var at = 0; at < user.appleArray.length; at++){
				appleTotal += user.appleArray[at];
			}
			user.avgApple = appleTotal / user.appleArray.length;
			// update html display
			updateUserCash();

		}	else {
			alert("You don't have enough money to purchase this item");
		}

	});

	$("#buyOrange").on('click',function(){
		if(user.totalCash >= 0 + priceArray[1]){
			user.totalCash -= priceArray[1];
			user.numOranges++;
			// calculate average purchase price
			user.orangeArray.push(priceArray[1]);
			var orangeTotal = 0;
			for(var at = 0; at < user.orangeArray.length; at++){
				orangeTotal += user.orangeArray[at];
			}
			user.avgOrange = orangeTotal / user.orangeArray.length;
			console.log(user);
			updateUserCash();
		}	else {
			alert("You don't have enough money to purchase this item");
		}
	});

	$("#buyBanana").on('click',function(){
		if(user.totalCash >= 0 + priceArray[2]){
			user.totalCash -= priceArray[2];
			user.numBananas++;
			// calculate average purchase price
			user.bananaArray.push(priceArray[2]);
			var bananaTotal = 0;
			for(var at = 0; at < user.bananaArray.length; at++){
				bananaTotal += user.bananaArray[at];
			}
			user.avgBanana = bananaTotal / user.bananaArray.length;
			console.log(user);
			updateUserCash();
		}	else {
			alert("You don't have enough money to purchase this item");
		}
	});

	$("#buyGrape").on('click',function(){
		if(user.totalCash >= 0 + priceArray[3]){
			user.totalCash -= priceArray[3];
			user.numGrapes++;
			// calculate average purchase price
			user.grapeArray.push(priceArray[3]);
			var grapeTotal = 0;
			for(var at = 0; at < user.grapeArray.length; at++){
				grapeTotal += user.grapeArray[at];
			}
			user.avgGrape = grapeTotal / user.grapeArray.length;
			console.log(user);
			updateUserCash();
		}	else {
			alert("You don't have enough money to purchase this item");
		}
	});

	function updateUserCash(){
		// pull out cash and prices and round to two decimal places
		var roundedCash = Math.round(user.totalCash * 100)/100;
		var roundedApple = Math.round(user.avgApple*100)/100;
		var roundedGrape = Math.round(user.avgGrape*100)/100;
		var roundedBanana = Math.round(user.avgBanana*100)/100;
		var roundedOrange = Math.round(user.avgOrange*100)/100;

		// update html elements with data from objects
		$("#totalCash").html(roundedCash);
		$("#apples").html(user.numApples);
		$("#oranges").html(user.numOranges);
		$("#bananas").html(user.numBananas);
		$("#grapes").html(user.numGrapes);
		$("#avrApples").html(roundedApple);
		$("#avrGrapes").html(roundedGrape);
		$("#avrBananas").html(roundedBanana);
		$("#avrOranges").html(roundedOrange);
	}

	function displayPrices(){
		// update fruit prices html display
		$("#applePrice").html(priceArray[0]);
		$("#orangePrice").html(priceArray[1]);
		$("#bananaPrice").html(priceArray[2]);
		$("#grapePrice").html(priceArray[3]);
	}
});




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
