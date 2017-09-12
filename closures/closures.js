
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
