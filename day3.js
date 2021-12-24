


let nameArray = [ ["nisha", 22] ,["hiren" , 27] ,["anand" , 31]];
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























