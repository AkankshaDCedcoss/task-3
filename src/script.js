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



