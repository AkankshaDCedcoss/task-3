//This is a single line comment

/* This is a multiline comment
 */
//Comment Your JavaScript Code subtask 1
var myName;
//Declare JavaScript Variables subtask 2
var a;
a = 7;
//Storing Values with the Assignment Operator subtask 3
var b;
b = a;
//Assigning the Value of One Variable to Another subtask 4
var a = 9;
//Initializing Variables with the Assignment Operator subtask 5
var myFirstName = "ABC";
var myLastName = "XYZ";
//Declare String Variables subtask 6
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
//Understanding Uninitialized Variables subtask 7
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
//Understanding Case Sensitivity in Variables subtask 8
let catName = "Oliver";
let catSound = "Meow!";
//Explore Differences Between the var and let Keywords subtask 9
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
//Declare a Read-Only Variable with the const Keyword subtask 10
const sum = 10 + 10;
//Add Two Numbers with JavaScript subtask 11
const difference = 45 - 33;
//Subtract One Number from Another with JavaScript subtask 12
const product = 8 * 10;
//Multiply Two Numbers with JavaScript subtask 13
const quotient = 66 / 33;
//Divide One Number by Another with JavaScript subtask 14
let myVar = 87;
myVar = myVar++;
//Increment a Number with JavaScript subtask 15
let myVar = 11;
myVar = --myVar;
//Decrement a Number with JavaScript subtask 16 done
const ourDecimal = 5.7;
var myDecimal = 5.7;
//Create Decimal Numbers with JavaScript subtask 17
const product = 5.0 * 1.0;
//Multiply Two Decimals with JavaScript subtask 18
const quotient = 4.4 / 2.0;
//Divide One Decimal by Another with JavaScript subtask 19
const remainder = 11 % 3;
//Finding a Remainder in JavaScript subtask 20
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;
//Compound Assignment With Augmented Addition subtask 21
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
//Compound Assignment With Augmented Subtraction subtask 22
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= b;
c *= 10;
//Compound Assignment With Augmented Multiplication subtask 23
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
//Compound Assignment With Augmented Division subtask 24
const myStr = 'I am a "double quoted" string inside "double quotes".';
//Escaping Literal Quotes in Strings subtask 25
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//Quoting Strings with Single Quotes subtask 26
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//Escape Sequences in Strings subtask 27
const myStr = "This is the start. " + "This is the end.";
//Concatenating Strings with Plus Operator subtask 28
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
//Concatenating Strings with the Plus Equals Operator subtask 29
const myName = "ABC";
const myStr = "My name is " + myName + "and I am well!";
//Constructing Strings with Variables subtask 30
const someAdjective = "ABC";
let myStr = "Learning to code is ";
myStr += someAdjective;
//Appending Variables to Strings subtask 31
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
//Find the Length of a String subtask 32
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
//Use Bracket Notation to Find the First Character in a String subtask 33
let myStr = "Jello World";
myStr = "Hello World";
//Understand String Immutability subtask 34
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
//Use Bracket Notation to Find the Nth Character in a String subtask 35
const lastLetterOfLastName = lastName[lastName.length - 1];
//Use Bracket Notation to Find the Last Character in a String subtask 36
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
//Use Bracket Notation to Find the Nth-to-Last Character in a String subtask3 37
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
  " " + myNoun + "  " + myAdjective + "  " + myVerb + "  " + myAdverb + ".";
//Word Blanks subtask 38
const myArray = ["ABC", 10];
//Store Multiple Values in one Variable using JavaScript Arrays subtask 39
const myArray = [
  ["ABC", 10],
  ["XYZ", 11],
];
//Nest one Array within Another Array subtask 40
const myArray = [50, 60, 70];
const myData = myArray[0];
//Access Array Data with Indexes subtask 41
const myArray = [18, 64, 99];
myArray[0] = 45;
//Modify Array Data With Indexes subtask 42
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[2][1];
  //Access Multi-Dimensional Arrays With Indexes subtask 43
  const myArray = [["John", 23], ["cat", 2]];
  myArray.push(["dog", 3]);
  //Manipulate Arrays With push() subtask 44
  const removedFromMyArray = myArray.pop();
  //Manipulate Arrays With pop() subtask 45
  const removedFromMyArray = myArray.shift();
  //Manipulate Arrays With shift() subtask 46
  myArray.unshift(["Paul", 35]);
  //Manipulate Arrays With unshift()
  const myList = [["Abc" , 10],["pqr" , 11], ["xyz",12],["apple",13], ["orange" , 14]];
  //Shopping List subtask 48
  function reusableFunction ()
{
  console.log("Hi World");
}
var x = reusableFunction();
//Write Reusable JavaScript with Functions subtask 49
function functionWithArgs(a,b)
{
return a+b;
}
console.log(functionWithArgs(1,2));
console.log(functionWithArgs(7,9));
//Passing Values to Functions with Arguments subtask 50
function timesFive(a)
{
return a*5;
}
timesFive(5)
timesFive(2)
timesFive(0)
//Return a Value from a Function with Return subtask 51
let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;

}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }
  //Global Scope and Functions subtask 52
  function myLocalScope() {
    var myVar;

    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  //Local Scope and Functions subtask 53  
  const outerWear = "T-Shirt";

function myOutfit() {
    const myOutfit = "sweater";
 return myOutfit;
 return outerWear;
}

myOutfit();
//Global vs. Local Scope in Functions subtask 54
let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive()
{
   sum=sum + 5;
  
 
}

addThree();
addFive();
//Understanding Undefined Value returned from a Function subtask 55
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);
//Assignment with a Returned Value subtask 56
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(item);
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//Stand in Line subtask 57
function welcomeToBooleans() {
    return true;
}
// Understanding Boolean Values subtask 58
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue==true)
{
return "Yes, that was true";
}
return "No, that was false";
}
//Use Conditional Logic with If Statements subtask 59
function testEqual(val) {
    if (val=="12") { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  //Comparison with the Equality Operator subtask 60
  function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  //Comparison with the Strict Equality Operator subtask 61
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  //Practice comparing different values subtask 62
  function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  //Comparison with the Inequality Operator subtask 63
  function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  //Comparison with the Strict Inequality Operator subtask 64
  function testGreaterThan(val) {
    if (val >100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  //Comparison with the Greater Than Operator subtask 65
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  //Comparison with the Greater Than Or Equal To Operator subtask 66
  unction testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  //Comparison with the Less Than Operator subtask 67
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  //Comparison with the Less Than Or Equal To Operator subtask 68
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if ( (val <= 50) && (val >= 25) ) {
      
        return "Yes";
      }
    
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
  //Comparisons with the Logical And Operator subtask 69
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  //Comparisons with the Logical Or Operator subtask 70
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else  {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  //Introducing Else Statements subtask 71
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);
  //Introducing Else If Statements subtask 72
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10){
      return "Less than 10"
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  //Logical Order in If Else Statements subtask 73
  function testSize(num) {
    // Only change code below this line
    if(num < 5)
    {
      return "Tiny";
    }
    else if(num < 10)
    {
      return "Small";
    }
    else if(num < 15)
    {
      return "Medium";
    }
    else if(num < 20)
    {
      return "Large";
    }
    else
    {
      return "Huge";
    }
  
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);
  //Chaining If Else Statements subtask 74
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1)
  {
    return "Hole-in-one!";
  }
  else if (strokes <= par - 2	)
  {
    return "Eagle";
  }
  else if (strokes == par - 1)
  {
    return "Birdie";
  }
  else if (strokes == par)
  {
return "Par";
  }
  else if (strokes == par + 1)
  {
    return "Bogey";
  }
  else if (strokes == par + 2)
  {
    return "Double Bogey";
  }
  else
  {
    return "Go Home!";
  }
  
  // Only change code above this line
}

golfScore(5, 4);
//Golf Code subtask 75
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val)
  {
    case 1 :
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;

  }



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//Selecting from Many Options with Switch Statements subtask 76
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

switch(val)
{
case "a":
answer = "apple";
break;
case "b":
answer = "bird";
break;
case "c":
answer = "cat";
break;
default:
answer = "stuff";




}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//Adding a Default Option in Switch Statements subtask 77
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
      answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
//Multiple Identical Options in Switch Statements subtask 78
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){


  case "bob" :
    answer = "Marley";
    break;
  case 42 :
    answer = "The Answer";
    break;
  case 1 :
    answer = "There is no #1";
    break;
  case 99 :
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
  
}
  // Only change code above this line
  return answer;
}
//Replacing If Else Chains with Switch subtask 77
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  }
  // Only change code above this line


isLess(10, 15);
//Returning Boolean Values from Functions subtask 78

/ Setup
function abTest(a, b) {
  // Only change code below this line
if(a<0 || b<0)
{
  return undefined;
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//Return Early Pattern for Functions subtask 79
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card)
{
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
     count++;
  break;
  
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
       count--;
}
       
  
        if(count > 0)
        {
          let x = count + " Bet";
          return x;
          
        }
        else
        {
          let y =count + " Hold";
          return y;
        }


}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//Counting Cards subtask 80
const myDog = {
  // Only change code below this line
  "name" :"rosy",
  "legs" : 4 ,
  "tails" : 1 ,
  "friends" : ["mini" , " bruno"]


  // Only change code above this line
};
//Build JavaScript Objects subtask 81
