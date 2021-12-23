function sum(a,b)
{
    return a+b;
}
sum(5);
 let sum1 = 10+10;
 console.log(sum1);
  
 let incriment=6;
 incriment++;

 function inc(x)
 {
     //x+=x;
     var a=x++;
     console.log(a,x);
     return x++;
     
 }
 var res=inc(3);
 console.log(res);
 var myName= "nisha";
 var lastLetterOfMyname= myName[myName.length-1];
 console.log(lastLetterOfMyname);

 function wordBlank(noun , adjective , verb , adverb)
 {
    var result ="";
     result += "the" +" "+  adjective +" "+  noun +" "+ verb + " to the store" +" "+ adverb ;
     return result;
 }
console.log(wordBlank("dog" , "big" , "run" , "quickly"));


var myArray = [12,13,14];
var array = myArray[0];
console.log(array);

var arrayOfNumbers = [1,2,3,4];
console.log(arrayOfNumbers[0]);

var arrayOfNumbers = [1,2,3,4];
arrayOfNumbers[1]=5;
console.log(arrayOfNumbers);


var numberArray =[[1,2,3,4] , [5,6,7,8] , [9,10,11,12],[[13,14,15,16],17,18]];
 numberArray[1][4] =5;
 console.log("Show number of array");
console.log(numberArray);


//var arrayOfNumbers = [1,2,3,4];
//arrayOfNumbers.push([5,6]);
//console.log(arrayOfNumbers);

let nameArray = ["nisha" , "patel" , "surajpar"];
//nameArray.push(["bhuj" ]);
nameArray.push("bhuj");
console.log(nameArray);
















