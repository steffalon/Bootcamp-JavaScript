console.log("JavaScript ready!");

// 1

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

// 2
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
console.log(typeof temp);

for (var i = 0; i < 15; i++) {
  window["firstVarible" + i] = i;
  console.log(typeof window[i]);
}
