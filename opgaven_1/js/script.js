console.log("JavaScript ready!");

// 2

var secondVarible = "Hello world";
var thirdVarible = "I'm third!";
var fourthVarible = 12;
var fifthVarible = 19;
var thisIsSix = "Hello world 2";
var bolean = true;
var thisIsFalse = false;
var greet = "Hey!";
var Ending = "Goodbye!";
var testing = "This is a test varible";
var debug = false;
var number = 5;
var status = "Online";
var test2 = "This is test 2";
var lastVarible = "This is the last varible";

// 3
for (var i = 0; i < 15; i++) {
  window["firstVarible" + i] = i;
  console.log(window["firstVarible" + i]);
}

// 4
var temp = thirdVarible;
thirdVarible = secondVarible;
secondVarible = temp;

console.log(thirdVarible + " and " + secondVarible);


// 5
for(var i = 14; i < 20; i++) {
    var random_boolean = Math.random() >= 0.5;
    window["variables" + i] = random_boolean;
    console.log(window["variables" + i]);
}
for(var i = 0; i < 20; i++) {
    console.log(window["variables" + i] + " : " + typeof(window["variables" + i]))
}

console.log("--FUNCTIONS--")

function multiply(value, multiplier) {
  var outcome = value * multiplier;
  console.log("Outcome is " + outcome);
}

multiply(Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1));

function makeOneString(string1, string2) {
  oneString = string1 + string2;
  console.log(oneString);
}

makeOneString("Hello", "World");

//Declaration

function returnDeclatation() {
  return "I'm returning a value";
}

console.log(returnDeclatation());

//Expression
var say = function sayTest() {
  return "test";
}

console.log(say());

//Anonymous function
var anonymousFunction = function() {
  return "This is an anonymous return value of this function";
}

console.log(anonymousFunction());


document.addEventListener("click", function(){
  alert("test");
});

//IIFE
(function runAuto() {
  console.log("I'm running automaticly without a call");
}) ();


//Closure

function closure() {
  var functionVarible = "I am a varible";
  function extend() {
    return full = functionVarible + " and something is added here!";
  }
  console.log(extend());
}

closure();


//Scope
var singer = "Harry Chapin";
function makeVisable() {
  console.log(singer);
  singer = "Its just Harry";
  return singer
}

singer = makeVisable(singer);

console.log(singer);


console.log("--ARAYS--");

//length of array

var games = Array("Hitman", "Sims", "The Isle");

console.log(games);

console.log("Groote van array: " + games.length);

//Push
var newArray = Array();
console.log(newArray);
newArray.push("test");
console.log(newArray);

//Splice
var spliceArray = new Array("Ian", "Simon", "Tonje", "Dennis", "Menno", "Margot", "Bart", "Steven");

console.log(spliceArray);

spliceArray.splice(1, 3);

console.log(spliceArray);

spliceArray.pop();

console.log(spliceArray + " = Laatste array string is weggehaald.");

console.log("Pop haalt de laatste value weg dus de tegenhanger is shift§.");

//Alphabet sort

var sortArray = Array("Ben", "Cynthia", "Astrid", "Dirk");

console.log(sortArray);

sortArray.sort();
console.log(sortArray);

sortArray.reverse();
console.log(sortArray);

//Sort array with numbers

var numberArray = Array(2, 5, 6, 1, 7, 9);

console.log(numberArray.sort());


//22

console.log(sortArray);

var arrayKopie = Array();

arrayKopie = sortArray.splice(2);
console.log("Is gesplit naar...");
console.log(sortArray);
console.log(arrayKopie);


//23
var arrayPart1 = Array("test, test2, test3");
var arrayPart2 = Array("test4");
arrayPart2.push(arrayPart2);
console.log(arrayPart1);


//24
//een staat bij liin 84!

document.addEventListener("mousemove", function(){
  console.warn("Mouse is moving on screen");
});

document.addEventListener("mouseout", function(){
  console.warn("Mouse is out of the browsers screen");
});


//25

var person = {
    firstName:"Simon",
    lastName:"Boerrigter",
    age:17,
    eyeColor:"green"
};

var car = {
    name:"Porsche",
    model:"718 Boxster",
    Engine:"300hp"
};

var houseWithOpenings = {
    doors:2,
    windows:10
};

var laptop = {
    buildYear:2016,
    osInstalled:"OSX",
    has4kScreen:false
};

var houseWithOpenings = {
    doors:2,
    windows:10
};

var train = {
    company: "NS",
    seatClass:2
};

var keyboard = {
    layout: "QWERTY",
    hasNumPad:true
};

var samsungTV = {
    smartTV: true,
    is4K:false
};

var playstationController = {
    hasLightOn: true,
    dualshock:true
};

var iphoneX = {
    homebutton: false,
    touchID:false,
    chip: "A11 BIONIC"
};

//26

function getIndentity(firstName, lastName) {
  var person2 = {
      firstName: firstName,
      lastName: lastName
  };
  var information = person2.firstName;
  information += " " + person2.lastName;
  return information;
}

console.log(getIndentity("Simon", "Boerrigter"));

//27

function showName() {
  var student = {
    name: "Simon"
  };
  return student
}

console.log(showName());

//28

var student = {
  name: "Test"
};
