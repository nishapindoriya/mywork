/*let nameArray = [ ["nisha", 22] ,["hiren" , 27] ,["anand" , 31]];
nameArray.removedfromnameArray = nameArray.pop();  //remove last elelment of array
//nameArray.pop(); 
nameArray.shiftfromnameArray = nameArray.shift();  //remove first element of array
//nameArray.shift();
nameArray.push(["ashwini" , 2]); // add element at the end of the array
nameArray.unshift(["priya" , 31]); // add element at the begging of the array
console.log(nameArray);

function reusableFunction()
{
    console.log("heyy world");
}
 reusableFunction();
 reusableFunction(); // reusablity of single function

 function add(a,b)
 {
    // return a+b;
     //var result = a+b;
     console.log("addition of two number:");
     console.log(a+b);
  
 }
  add(5,6);


var myNum = 10;
  function fun1()
      {
        var myNewNum= 20;
        var result1 = "";
        if( typeof myNewNum != "undefined")
    {
      
    result1 += "myNewNum:" + myNewNum;

    result1 += "myNum:" + myNum;
   
    }
    console.log(result1);
        
      }
  
function fun2()
{
    var result = "";
  
    if( typeof myNum != "undefined")
    {
      
    result += "myNum:" + myNum;

   
    }
    console.log(result);

}

 fun1();
 fun2();

var outerwear = "t-shirt"; // global variable 
function cloths()
{ 
    var outerwear = "sweater";  //local variable takes president over global variable
    return outerwear;
} 

console.log(cloths());   // output: sweater   // called a function
console.log(outerwear);  // output- tshirt    // called a variable



var changed=0;
function change(num)
{
    return (num+5)/3;
}
 change(4);



 function nextInLine(arr, item)
 {   
     arr.push(item);
     return arr.shift();
     
 }

 var array=[1,2,3,4,5];
 console.log("before: "+ JSON.stringify(array));
console.log(nextInLine(array,6));
console.log(nextInLine(array,7));
console.log("after" + JSON.stringify(array));



function testBoolian(isthattrue)
{
     if(testBoolian==true)
     {
         return "yes,it is true";
     }
    return "no,it is false";
}
testBoolian(false);



function compareequality(a,b)
{
    if(a==b)   // answer : equal (type conversion string into number)
    //if(a===b)  // answer : not equal (not converting type),strict equality operator
    {
        return "equal";
    }
    return "not equal";
}
compareequality(10 , "10");


function notequal(val)
{
    if(val>100)
    {
        return "over 100";
    }
    if(val>10)
    {
    return "over 10";
    }
    return "10 or under 10";
}
 console.log(notequal(10)); 


 function logicaland(value)
{
    if(value<=100 && value>=25)  //logical-and (answer-no)
     //if(value<=100 || value>=25)  //logical-or  (answer-yes)
    {
        return "yes";
    }
    
    return "no";
}
 console.log(logicaland(10));
 
 
 function ifelsecheck(value)
 {
     if(value>5)
     {
        result = "value is bigger than 5";
     }
     else
     {
        result = "value is lesser than 5";
     }
     return result;
 }
  ifelsecheck(6);



 
  function elseifcheck(value)
  {
      if(value>10)
      {
         return "value is greater than 10";
      }
      else if(value<5)
      {
         return "value is less than 5";
      }
      else
      {
         return "value between 5 and 10"
      }
      
  }
  elseifcheck(7);          */

//let golfnames = ["par3","par2","par1","par","par1p","par2p","go home"];

function switchincase(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    case 5:
    case 6:
    case 7:
      answer = "delta2"; //multiple case have same answer
      break;
    default:
      //default in  switch statement
      answer = "anything";
      break;
  }
  return answer;
}
console.log(switchincase(3)); //ans: gamma

function isless(a, b) {
  return a < b; //direcr return instead using if statement
}
console.log(isless(6, 7));

var myAraay = [];
var i = 0;
while (i < 5) {
  myAraay.push();
}
console.log(myAraay);
