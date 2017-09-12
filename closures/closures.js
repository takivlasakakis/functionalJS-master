
	var blab = function(){
		alert(string);
	};


var nonsense = function(string) {

	var blab = function(){
		alert(string);
	};

	blab();
};

nonsense('blah blah blah');

var nonsense = function(string) {

	var blab = function(){
		alert(string);
	};

	return blab;
};

var blabLater = nonsense('blah blah blah');

blabLater(); // alert 'blah blah blah'

var blabAgainLater = nonsense('hehehe');
blabAgainLater(); // alert hehehe
blabLater(); //alert 'blah blah blah'

console.log(blabLater);
console.log(blabAgainLater);

var lastNameTrier = function(firstName){
	// does stuff

	var innerFunction = function() {
		//does stuff
	};
	// maybe returns something here
};

var firstNameFarmer = lastNameTrier('Farmer'); // logs nothing
firstNameFarmer('Brown'); // logs 'Farmer Brown'

firstNameFarmer('Jane'); // logs 'Farmer Jane'

var lastNameTrier = function(firstName) {
	var inner = function(lastName) {
		console.log(firstName + " " + lastName);
	};
	return inner;
}

var firstNameKatrina = lastNameTrier('Katrina');
firstNameKatrina('Uychaco');
firstNameKatrina('Smith');

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow.It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.');
storyOfMyLife.erase(); //''

var storyWriter = function() {
	var story = '';
	return {
		addWords: function(str) {
			story += str + ' ';
			return story.trim();
		},
		erase: function() {
			story = '';
		}

	};
};

var Toaster = function() {
	var maxTemp = 500;
	var temp = 0;
	return {

		setTemp: function(newTemp) {
			if (newTemp > maxTemp) {
				console.log("That temp is too high!");
			} else {
				temp = newTemp;
			}
		}
	};
};

var myToaster = Toaster();
myToaster.setTemp(300);


// ###### ###### ###### ###### ###### ###### ######

// #Callback Exercises

// Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).

var funcCaller = function(func, arg) {
	return func(arg);
};

// Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

var firstVal = function(arr, func) {
	func(arr[0], 0, arr);
};

// Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

firstVal = function(list, func) {
	if(Array.isArray(list)) {
		return func(arr[0], 0, arr);
	} else {
		// for(var k in list) {
		// 	return func(list[k], k, list);
		// }
		var propArr = Object.keys(list);
		func(list[propArr[0]], propArr[0], list);
	}
};

// [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that takes a function and returns a version of that function which can only be called once. [Hint: you need a closure] You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:

//   var chargeCreditCard = function(num, price){
//     //charges credit card for a certain price
//   };
//   var processPaymentOnce = once(chargeCreditCard);
//   processPaymentOnce(123456789012, 200);