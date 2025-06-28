/* Java Script 


Js code can be Used in Three Places  

1 with in the body , with in the Header tag  , using external js file  */

console.log("Hello Sripad")


/*  Java scripr literals  */

/*  numbers 


 numbers are written with  or without decimals   10  ,  10.45

 // strings 


  strings are written with in a single or duble quotes  

  */


  // JS Variable 


  // js variable are used to store the data  and js uses key words like let const var to declare the variables

  let a = 10;

  // here let is a keyword and x is variable  10 is litterals


  // js first character must be a letter or _ or dollar $    numbers are not allowed as the first character


  // java scripr is case sensitive 


  // ex:   latsName lastname both are two different variables  

  // note : hyphens are not allowed in js they are reserved for the substraction



  // java script comments 


// single line comment --->  //

// multi line commetns --->  /* */



// JAVA SCRIPT VARIABLES 


 /* there are three different ways to declare a variable  var let const
 variables are containers  for storing the data 

 let a = 10;


 in this example a ia variable declared with let keyword


 Variable declared without a value will have the value as undefined 
   
 ex : <p id ="demo"> </p>
 
 <script>
 var car ;
 cardocument.getElementById('demo').innerHTML = car;

 console.log(car) // undefined

 </script>

 // Re declaring the js variable 

 if you redeclare the js variable it will not loose its value 
 

 ex : var car = Volvo

 var car;

  console.log( car)// Volvo

//  let Key word 


/* 
 variables defined with let can not be redeclared 
 variables defined with let can be reassigned 
variables defined with let will have a block scope


let a = 10;
let a = 20;  // syntax error   // redeclartion is not poosible using let keyword

let b  = "sripad";

b= 10;
console.log(b) // 10 re assignement is poosible using let keyword


{
let name1 ="Ram";

}
 console.log(name1)// ReferenceError

// Examples 

{
let x= 2;
}

console.log(x) //  ReferenceError   (x can not be accessible outside the block )

using var

var x = 10 ;

{
var x = 20;
}

console.log( x) // 20  

// variables defined with var will have global scope



// example 2


let a = 10;

{
let a = 2;

}

console.log( a )// 10   here your are accessing  variable a outside the gloabal scope  so its value is 10



// Redeclaration

var aa = 10;
 let aa = 20 ; //SyntaxError


 // redeclaring  a variable in the same block is not allowed
 
 var a = 2;
 let a = 3 ; // syntaxError

 {
 let q = 100;
 let q = 300; //syntaxError
 }

 redeclaring a varibale  with let in another block is allowed

 let s = 2; // allowed

 {
let s = 22// allowed 
 }

 {
 let s = 200 // allowed

 }


 // Const


 variables defined with const will have block scope
 variables defined with const can not be redeclared
 variables defined with const can not be reassigned 

 // can not be reassigned

 const pi = 3.14;
pi = 3.141

console.log(pi)// TypeError



// must be assigned 

const  aa = 2343; // allowed


const aa;
 aa= 200; //  SyntaxError


  // JS comparison operators

  == equal to 
   ===  equal value  &  equal type
   != not equal
   !== not equal value & not equal type


   JS logical operators

   &&--->logical and
   || ---> logical or
    !----> logical not

    JS type oprtators

    typeof ---> returns the type of a variable

    instanceOf ---? returns true if an object is an instance of an object type


     // Escape characters


     let full_Name = "My anme is Amballa Sripad";


     if you want Amballa Sripad  in a double quote use \"


     let full_Name = "My Name is \"Amballa Sripad\""

     console.log(full_Name) //My Name is "Amballa Sripad"


     let text = 'Its\'s alright'

     console.log(text) //Its's alright

      

     let  xx = "John";

      console.log(typeof(xx))// string

      let yy = new String("John")


      console.log(typeof(yy))// object

      console.log( xx==yy) // true  ( == checks the only value) 
console.log(xx === yy) // false ( === check the value and its data type ) 

*/

/*

// String Methods


// 1 string length

 string legth method returns the length of the string
 */

let strlen = "Sripad";

console.log(strlen.length)

 // 2 Slice(start, end)


 /* slice method is used to fetch some part of the string  it will take two arguments starting index and ending index
 and it returns the new string

 it will also takes negative index's in that case the string can be fetch from the end of the string

*/

const slice1  = "Sripad Amballa";
 console.log( slice1.slice(0,2)) // Sr
 console.log( slice1.slice(2,8)) // ipad A

 const slice2 =  slice1.slice(0) 
 console.log(slice2) //Sripad Amballa

 console.log(slice1.slice(-5));//balla
 console.log(slice1) //Sripad Amballa


 // 3 subString(start, end)


 /* subString method is similar to the slice method it is used to fetch some part of the string and returns the 
 new string 
 the only difference is it wont take the negative index's */


 const subString1 = "JavaTpoint";

 const subString2 = subString1.substring(0);
 console.log(subString2) //JavaTpoint

 console.log(subString2.substring(1,5)); //avaT


 // subStr(start, legth)

/* subStr method is used to fetch some part of the string and retuens the new string 

it will take two parameters starting index  and legth */


const subStr1 = "Java Script";

const subStr2 = subStr1.substring(0,9);

console.log(subStr2) //Java Scri

console.log(subStr1.substring(0)) //Java Script


 // 4 replace()

  /* replace method is used to replace the specified value with the provided value 

  by default it will replce the first match only

  replace method is case sensitive 
*/

const rep = "Please visit the office on working days "

console.log(rep.replace("office" ,"Workplace")) //Please visit the Workplace on working days 

// for case sensitive use regular expressions /i


const rep1 = "Please VISIT the office on working days VISIT "


console.log(rep1.replace(/visit/i,"workplace")) //Please workplace the office on working days VISIT


// for global replace use regular expression /g

const rep2 = "Please VISIT the office on working days VISIT"

console.log(rep2.replace(/VISIT/g,"Come")) //Please Come the office on working days Come


// 5 toUpperCase()


// string can be converted to the uppercase


const upper = "Sripad";

console.log(upper.toUpperCase()) //SRIPAD


// 6 toLowerCase()

// string can be  converted to the lower case

const lower = "SRipaD";

console.log(lower.toLowerCase()) //sripad

// 7 concat()


// concate method is used to join two or more strings   and retuens new string

const  concate1 = "Sripad";

const concate2  = "Amballa"

let concate3  = concate1.concat(" ",concate2) 

console.log( concate3) // Sripad Amballa


// 8 trim()


 // trim method is used to remove the whitespaces from both sides of the string


 const  trm = "  sripad amballa  " ;

 console.log(trm.trim()) //sripad amballa

 // 9 split()


 // a string can be converted into array using split method  and it returns the new arry


     const split1  = "sripad";

     const split2 = split1.split("");

     console.log(split2) // ['s', 'r', 'i', 'p', 'a', 'd']

     console.log(split2.length) // 6

let split3 =""
    for (let i=0; i<split2.length;i++){
split3 += split2[i]
    }
    console.log(split3)// sripad



    // 10 indexOf()


    /* index of method returns the index of first occurance in a spicified text in string

    it returns -1 if the spicified text doen not found
    
    */

    const idx = "Please locate where locate occurs";

    console.log(idx.indexOf('locate')) //7
    console.log(idx.indexOf('abc')) // -1



    // 11 lastIndexOf()


    /* lastIndex of method retuns the last index of the specified text in a string

    it returns -1 if the text is not found */

    const lastIdx = "Please locate where locate occurs"


    console.log(lastIdx.lastIndexOf("locate")) //20


    // 12 includes()

    // includes method returns true if a spicified value present in a string


    const includes1 ="Hello World Please welcome to the jS";

    console.log(includes1.includes("world")) //false
    console.log(includes1.includes("World")) //true


    // 13 startsWith()


    // returns true if a string begins with the specified value

    const  start1= "Sripad";
    
    console.log(start1.startsWith('S'))//true


    // 14 endsWith()

    // returns true if a string end swith the specified value

    const end1 = "note";
    console.log(end1.endsWith('e')) // true


/*  JAVA SCRIPT DATA TYPES  */


/* Primitive Data Types 

Strings Numbers Booleans undefined null 


// Non- Primitive Data Types 

 array object regular expressions

 */

 // Java script arrays


 /* common practice to decare the arrays is using const keyword


  there are 4 ways to create an array


  const car = ["Volvo","BMW"]

  const car  = [
  "volvo",
  "BMW",
  "AUDI"
  ]


  const car = []

  car[0]= "volvo";
  car[1]= "AUdi";
  car[2]= "BMW"

  const car new Array("Volvo", BMW);


  NOTE  :  typeof(car) // Object


  Arrays are accessed using numbered indexes

  Objects are accessed using the Named indexes

  */


  // Array Length

// Array Length method returns the length of an array
  const arrLen = ["Car","Bus","Bike"]

  console.log(arrLen.length) //3


  const points = [40]
  console.log(points) //[40]


  const points1 = new Array(40)
  console.log(points1) //  [empty × 40]   creates 40 undefined holes in an array


  // 1 toString();


   /* Js toString method converts an array to a string of comma seperated array values */


   const toStr = ["Banana", "Mango","Orange"];


   const toStr1 = toStr.toString();

   console.log(toStr1) //Banana,Mango,Orange



   // 2 Join ()


   /* Join method joins array of elements  into string  it is similar to the toString()method here we need to pass the seperator
   
   */

   const frtJoin = ["Banana","Mango","Apple","Kiwi"];

   const frtJoin1 = frtJoin.join('*');

   console.log(frtJoin1) //Banana*Mango*Apple*Kiwi

   // 3 POP()

   /* Pop method removes the last element from an array and it retuns an elememt value that is poped out */


   const pop1  =  ["Apple","Banana","Carrot"];
   const pop2 = pop1.pop();
   console.log(pop2) //Carrot

   console.log(pop1) // ['Apple', 'Banana']


// 4 Push()

/* Push method adds a new element at the last index of an array and it returns the new length of an array */


const push1  = ["Apple","Banana","Kiwi","Mango"];

const push2 = push1.push("Orange");
console.log(push2) //5  retuns the new legth of an array
console.log(push1) //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']


// 5 Shift()


/* shift method is similar to the Pop() methos but it remove the firts element from an array 
shift method returs the element that was shifted out

*/


const shift1  = ["car","Bus","Aeroplane"];

const shift2  = shift1.shift();
console.log(shift2) //car

console.log(shift1)//['Bus', 'Aeroplane']

// 6 unShift()

/* Unshift method is similar to the  push methos but it adds a new element at the first index of an array

and retuns the new length of the string */

const unshift1  = ["Volvo","BMW"];

const unshift2  = unshift1.unshift("Audi");
console.log(unshift1) // ['Audi', 'Volvo', 'BMW']
console.log(unshift2) // 3

// changing an elements

const chFrts = ["Apple","Banana","Oragne"];

chFrts[0] = "Kiwi";

console.log(chFrts) //['Kiwi', 'Banana', 'Oragne']

// Using length property add an element into an array

console.log(chFrts.length) //3

chFrts[chFrts.length] = "Carrot" 

console.log(chFrts) //['Kiwi', 'Banana', 'Oragne', 'Carrot']


 // Deleting an element using delete keyword

const dlt =  ["Apple","Banana","Carrot"];

delete dlt[0]

console.log(dlt) //[empty, 'Banana', 'Carrot']

console.log(dlt[0]) //undefined


// NOTE  :  using delete keyword we can delete the elements from an array but it will create an undefined holes in array 

// so for delete operation make use of pop and shift methods


//  8 Splice()

 /*  splice method can be used to add or delete an element from the desired postion */

 const splice1 = ["Banana","Mango","Orange"];

 const splice2 = splice1.splice(1,0,"Kiwi","Carrot")

 

 /* here the first index specify the position where new elements added 
 0 --->specify the no of elements should be deleted
 and rest of the arguments are added based on provided index position


 at index 1 add Kiwi,Carrot
 */

 console.log(splice1) //['Banana', 'Kiwi', 'Carrot', 'Mango', 'Orange']


 const splice3 = ["Green","Yellow","Red","Violet"];

 /* position 1 index 
 2 indicates  no of elements should be deleted  from provided index 1 
  */

 console.log(splice3.splice(1,2,"White")); // ['Yellow', 'Red']

 console.log(splice3) //['Green', 'White', 'Violet']


 //  9 Concate ();

 //concate method is used to merge two or more rows in to a new array
 // concate method returns a new array  it wont change the existing array 



 const boys = ["Sripad","Datta","Anwith"];
 const girls = ["Deekshitha"];

 const cousins  = boys.concat(girls);

 console.log(cousins) //['Sripad', 'Datta', 'Anwith', 'Deekshitha']

 console.log(boys) //['Sripad', 'Datta', 'Anwith']


 const arr1  =[1,2,3];
 const arr2 = [4,5,6];
 const arr3 = [7,8,9];
 const arry = arr1.concat(arr2,arr3)
 console.log(arry) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
 console.log(arr1) //[1, 2, 3]


 // 10 Slice();


 // slice method is used to fetch some part of the array and retuns the new array


 const sliArr = ["Banana","Mango","Orange"];

 const sliArr2 = sliArr.slice(1,3);
 console.log(sliArr2) //['Mango', 'Orange']
 console.log(sliArr) // ['Banana', 'Mango', 'Orange']


 // 11 sorting 


 const sort1 = ["Orange","Apple","Mango","Kiwi"];
 const sort2 = sort1.sort();

 console.log(sort1.sort()) // ['Apple', 'Kiwi', 'Mango', 'Orange']
 console.log(sort1) //['Apple', 'Kiwi', 'Mango', 'Orange']
 console.log(sort2) //['Apple', 'Kiwi', 'Mango', 'Orange']

 console.log(sort1.reverse()) //['Orange', 'Mango', 'Kiwi', 'Apple']

 // Numeric Sort 


 const numSort = [23,7,0,5,90];

 const numSort2 = numSort.sort((a,b)=>b-a);

 console.log(numSort2) //[90, 23, 7, 5, 0]  //Descending order

 console.log(numSort)//[90, 23, 7, 5, 0]

 console.log(numSort.sort((a,b)=>a-b));//[0, 5, 7, 23, 90] Ascending order


 
// 12 forEach();


/* for Each Method calls a function once for each array element   
 
forEach method takes 3 arguments 

initial value
index
array itself

*/

const for1 = [45,4,9,16,25];

let forResult ="";

for1.forEach((value,index,arr)=> forResult += value *2 + " ")
console.log(forResult) //90 8 18 32 50 

console.log(for1)//[45, 4, 9, 16, 25]


const for2 = for1.forEach(val=>val*2);
console.log(for2) //undefined


// forEach Method Does not return a new array based on the given array
// for Each method retuns undefined


// 13 Map()


//Map() method will take 3 arguments value , index, array itself
// map method retuns a new Array

// map method does not change the original array

const map1 = [50,90,100,130];

const map2 = map1.map(funMap);

function funMap(val,index, arra){

    return  `Score${val}  Id ${index} `

}
console.log(map2) // ['Score50  Id 0 ', 'Score90  Id 1 ', 'Score100  Id 2 ', 'Score130  Id 3 '] // retunes new array


const map3 = map1.map((val)=>val*2);
console.log(map3) //[100, 180, 200, 260]


// 14  filter method 


/*Array Filter method check whether the given array elements satisfy the provided condition 

it will take 3 parameter value , index, arrayitself
 and it retuns the new array


*/

const fil = [50,90,80,100,99,70,49]

const fil2 = fil.filter((val)=>val>50);
console.log(fil2) //[90, 80, 100, 99, 70]


// 15 reducer()

/* reducer method will reduces the given array elements into single value 

it will take  4 parameters

1) Accumulator
2) current value
3) current index
4) array



*/

const reduce1 = [45,4,9,16,25];

const reducer2 = reduce1.reduce(funReduce);

function funReduce(accumulator, value, index, array){

    return accumulator += value;

}
console.log(reducer2) //99

// Reducer method will take initial value as well


const  reducer3 = [45,4,9,16,25];

const reducer4 = reducer3.reduce((acc,val,index,arr)=>{
    return acc += val;
},100)
console.log(reducer4) //199


// 16 every()

/* every method checks whether all the given elements in an array will satisfy the provided condition
if stisfys it will return true else it will return false

*/

const every1 = [12,14,25,20,9];

const every2 = every1.every(val=>val>=14);
console.log(every2) //false

const every3 = every1.every(val=>val>=5);
console.log(every3) //true


//17 some()


// Some method checks whether alteast one of the array element is satisfy the provided condition

// if yes it will return true else it will return false


const some1 =[12,14,25,20,9];

const some2 = some1.some(val=>val=25);
console.log(some2) //true
const some3 = some1.some(val=>val>30);
console.log(some3) //false


// 18 indexOf()

/* indexOf method check whether the given array elements has the provided value  if yes it will return that element index 
if not found it will return the -1 */

const indx1 = ["Volvo","BMW","Audi"];

const indx2 = indx1.indexOf("Audi");
console.log(indx2)//2

const indx3 = indx1.indexOf("Toyato")
console.log(indx3) //-1

// 19 includes()

/* includes method check whether the given array elements has the provided value  if yes returns true else returns false
*/

const incld1 = ["Banana","Mango"];

const incld2 = incld1.includes("Banana");
console.log(incld2) // true

// 20 find()


// find method returns the first array element that satisfy the provided condition 


const find1 = [12,14,25,20,9];

const find2 = find1.find(val=>val>18);
console.log(find2) //25

/*   Dates */


const date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds())


// Math Object

//Math.round();


console.log(Math.round(4.5)) // 5 rounded up to the nearest integer
console.log(Math.round(4.4)) // 4 rounded up to the nearest integer


// Math.Ceil()

// rounded up to nearest integer
console.log(Math.ceil(4.2)) //5
console.log(Math.ceil(4.4)) //5
console.log(Math.ceil(4.7)) //5
console.log(Math.ceil(-4.2)) //-4


//math.floor()

// rounded down to the nearest integer

console.log(Math.floor(4.9))//4
console.log(Math.floor(4.2))//4
console.log(Math.floor(-4.2))//-5

 // math.trunc()

 // returns the integer part of the x

 console.log(Math.trunc(9.9)) //9
 console.log(Math.trunc(9.2)) //9
 console.log(Math.trunc(-9.2)) //-9

 // math.random()

 // return the value in between 0 to 1
 console.log(Math.random()) //0.255368174987304

 console.log(Math.floor(0.255368174987304*10)) //2


 // Js Boolean  falsi values

 console.log(Boolean(0))// false


 // boolean  value of empty string

  const emptyString  = "";
  console.log(Boolean(emptyString)) // false

  // boolean value of null;

  const nullValue = null;
  console.log(Boolean(nullValue)) // false

  // boolean value of undefined

  let undefinedVal ;
  console.log(Boolean(undefinedVal)) // false

  // Boolean value of Nan

  const nanValue  = 10/"hello";

  console.log(Boolean(nanValue))// false 
  console.log(nanValue)// NaN


  /* Falsi values are


  boolean of 0
  boolean of ""
  boolean of undefined
  boolean of NaN
  boolean of null
  boolean of false

*/

  // Terinary operator

  const age = 25;
   const eligiblity_check = (age>18)? "Eligible for Voting" : "Not eligible for voting"

   console.log(eligiblity_check) //Eligible for Voting
   

   //If else condition

   const greetingDate = new Date()
   
const greet = greetingDate.getHours();
console.log(greet)

let greetMsg =""

if( greet <12){
     greetMsg =  "Good Morning"
}else if(greet >12 && greet <17){
greetMsg ="Good After noon"

}else {
    greetMsg ="Good Evening"
}
console.log(greetMsg)



//  for in 


// for in iterates over the keys 

// suitable for Objects iteration


const obj = { fname: "Sripad" , "lName":"Amballa",id :233};

//console.log(obj.fname)



for (let key in obj){
    console.log(key) // fName lName id

}

let details =""
 for (let key in obj){
    details += obj[key]+ " "

 }

 console.log(details) //Sripad Amballa 233 


 // for in with Array

 const inArray = [20,50,89];

 let inValue =""

 for (let i in inArray){
    console.log(i) //0 1 2

 }

 for (let key in inArray){
    inValue += inArray[key] +" "
 }
 console.log(inValue) //20 50 89 


 // for Of 


 //for of iterates over the value  

 // Suitable for strings and arrays


  const of1 = [10,19,100]

  for (let value of of1){

    console.log(value) // 10 19 100
  }

   
  let of2 ="";
   for (let value of of1){
    of2 = of2+ value +" "
   }
   console.log(of2) //10 19 100


   /* for in iterates over te key and suitable for Object 
   for of iterates over the value  and suitable for arrays , string
*/

   // Set Method


   const letters = new Set(["a","b","c"]);
   console.log(letters)  //{'a', 'b', 'c'}

   console.log(letters.size)//3
   console.log(letters.add("d")) // {'a', 'b', 'c', 'd'}
   console.log(letters.size) //4
   console.log(letters.delete("d"));// true
   console.log(letters.size)//3
   console.log(letters)// {'a', 'b', 'c'}


   // Map()


   // Map holds key value pairs where key can be any data type  and it follws the insertion order as well




   const map22 = new Map([
    ["apple",20],
    ["banana",2]
])

   console.log(map22.size) //2 

   map22.set("orange",10);
   console.log(map22) //{'apple' => 20, 'banana' => 2, 'orange' => 10}


   // typeof


   typeof("John") // string
   typeof(10) // Number
   typeof(NaN) // Number
   typeof(false) // boolean
   typeof([1,2.,3]) // object
   typeof({name:"abc"}) // object
   //typeof(newDate())// object
   //typeof(function) // function
let myCar;
console.log(typeof(myCar)) // undefined

typeof(null) // object


 

function validation(){
    let message = document.getElementById('errorMessage');
    message.innerHTML="";
  let text_input = document.getElementById('inputText').value;
 try{
     if(text_input == '') throw "Empty";
     if(isNaN(text_input)) throw "Not a Number";
     text_input = Number(text_input);
      if(text_input < 5) throw "Too Low";
      if(text_input >10) throw "Too High"

 }catch(err){
    console.log(err)
    message.innerHTML = "Entered value is" + err;
 }

}

// Js Array Methods Practice

const arr4 = [1,2,3];

const arr5 = arr4.map(val=>val*2);
console.log(arr5) //[2, 4, 6]


// From an array of numbers, return only the even numbers.
 const arr6 = [2, 4, 6,1,7];
let arr8 ='';

const arr7 = arr6.map(val=>{
return val % 2 ==0 
});
console.log(arr7) //[true, true, true, false, false]

const arr9 = arr6.filter(val=>val % 2=== 0);
console.log(arr9) // [2, 4, 6]


//Given an array of words, return a single string with all words joined by a comma.

const arr10  = ["banana","Apple"]

const arr11 = arr10.join(',');
console.log(arr11) //banana,Apple

//Count the number of times each element appears in an array using reduce()

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); //{apple: 3, banana: 2, orange: 1}


//  includes

 const nums = [1,2,3,4];
 console.log(nums.includes(4)) // true
 console.log(nums.includes(5)) // false

 // indexof ()

 const colors = ['red', 'blue', 'green'];

 console.log(colors.indexOf('red')) //0
 console.log(colors.indexOf('pink')) //-1


 // find()

 const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
  ];

   const result = users.find(val=>val.age>25);
   console.log(result) //{name: 'Bob', age: 30}

   // findIndex()
   const numbers = [5, 10, 15, 20];
   const index= numbers.findIndex(val=>val >12);
   console.log(index) //2


   //Check if the number 7 exists in the array [1, 2, 3, 7, 8].

   const arr12 =  [1, 2, 3, 7, 8];
   const arr13 = arr12.includes(7);
   console.log(arr13) // true


   //Find the first number greater than 10 in the array.

   const arr14 = [1,2,4,10,27];
   const arr15 = arr14.find(val=>val>10);
   console.log(arr15)  //27


   //Return the index of the first occurrence of the word "hello" in a string array.

   const arr17 =["abc","dj","hds","hello","sdb"];
   const arr18 = arr17.findIndex(val =>val =="hello");
   console.log(arr18) //3


   //Check if at least one student has scored above 90.


   const score  = [67,90,87,99,37]

   const arr19 = score.some(val=>val >90);
   console.log(arr19)

//Check if all products in a cart have quantity > 0
   const cart = [
    { name: 'Apple', quantity: 3 },
    { name: 'Banana', quantity: 2 },
    { name: 'Orange', quantity: 1 }
  ];


  const check = cart.every(val=>val.quantity >0)

  console.log(check)

  //Sort an array of numbers in descending order.

  const arr20 = [20,7,90,1]

  const desc = arr20.sort((a,b)=>b-a);
  console.log(desc) // [90, 20, 7, 1]


  //Reverse the array [1, 2, 3, 4, 5].

  const arr21 =  [1, 2, 3, 4, 5];

  const arr22 = arr21.reverse()
  console.log(arr22) //[5, 4, 3, 2, 1]

  //Remove the third item from an array using splice().

  const arr23 = [5, 4, 3, 2, 1];

  const arr24 = arr23.splice(2,1);
  console.log(arr24)
  console.log(arr23) //[5, 4, 2, 1]


  //Get the first 3 items of an array using slice().

  const arr25 = ["apple","banana","orange","kiwi"];
  const arr26 = arr25.slice(0,3);
  console.log(arr26) // ['apple', 'banana', 'orange']


  //Given an array of numbers, return the sum of squares of all odd numbers.

  const arr27 = [2,3,8,7];
  const arr28 = arr27.filter(val=>val % 2 !==0).map(val=>val*val).reduce((acc,val)=>acc=acc+val)
  console.log(arr28)

  //From an array of user objects, return the names of users older than 30, sorted by age.
 
  const user = [
    { name: 'wlice', age: 39 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charls', age: 35 },
  ];


  const arr29 = user.filter(val=>val.age>30).sort((a,b)=>a.age -b.age).map(val=>val.name)

  console.log(arr29)


  // Flatten a nested array: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5].


  const arr30 = [[1, 2], [3, 4], [5]]

  const arr31 = arr30.flat(2);
  console.log(arr31)

  const arr = [1, [2, [3, [4]]]];

  console.log(arr.flat(Infinity)) //[1, 2, 3, 4]


  // Remove duplicates from an array.


  const arr32 = [1,3,4,1,4,2];

  const arr33 =  [... new Set(arr32)]
  console.log(arr33) //[1, 3, 4, 2]


  const arr34 = arr33.filter((val,index)=>arr33.indexOf(val)=== index)
  console.log(arr34) // [1, 3, 4, 2]

  //Group array items by a property (e.g., group users by their role).


  const person = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' },
    { name: 'David', role: 'user' },
    { name: 'Eve', role: 'guest' }
  ];

  const arr35 = person.reduce((acc,user)=>{
    if(!acc[user.role]){
        acc[user.role] =[]
    }
    acc[user.role].push(user)
    return acc
  },{})
  console.log(arr35)

  //Merge two arrays and remove duplicates.

  
  const arr36 = [1,3,1,4,3,2]

  const arr37 = [4,6,2,5];

  const arr38 = arr36.concat(arr37).filter((val,index,arr)=>arr.indexOf(val) == index)
  console.log(arr38) //[1, 3, 4, 2, 6, 5]


  console.log(arr36.filter((val,index,acc)=>acc))//[1, 3, 1, 4, 3, 2]


  const persons = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Carol", age: 22, active: true },
  ];

  //Get an array of all active users.

  const arr39 = persons.filter(val=>val.active== true).map(val=>val.name)
  console.log(arr39) // ['Alice', 'Carol']

  //Find the user with the highest age.

  const arr40 = persons.sort((a,b)=>b.age - a.age)[0]
  console.log(arr40) //{name: 'Bob', age: 30, active: false}


  //Return an array of names of users sorted by age.

  const arr41 = persons.sort((a,b)=>a.age - b.age).map(val=>val.name)
  console.log(arr41) // ['Carol', 'Alice', 'Bob']


  const arr42 = ['a','b','a']

  const arr43 = arr42.reduce((acc,val)=>{
    acc[val] = (acc[val]|| 0)+1
    return acc
  },{})
  console.log(arr43) //{a: 2, b: 1}


  /* JAVA SCRI{T STRING METHODS*/


  //Convert a string to uppercase.

  const str1 = "hello world";

console.log(str1.toUpperCase()) //HELLO WORLD

//Check if a string contains a specific word.

const str2 = "JavaScript is awesome";
console.log(str2.includes("awesome")) //true


//Get the length of a string.

const str3 = "Interview";
console.log(str3.length) //9

//Replace a word in a string.

const str4 = "I like Java";
console.log(str4.replace(/java/i,"Java Script")) //I like Java Script


//Extract a substring using slice().

const str5 = "JavaScript";
console.log(str5.slice(0,4)) //Java


//Capitalize the first letter of a string. 

const str6= "hello";
console.log(str6.charAt(0).toUpperCase()+str6.slice(1)) //Hello


//Reverse a string.

const str7 = "hello";

console.log(str7.split('').reverse().join('')) //olleh

//Count the number of vowels in a string.

const str8 = "javascript";

console.log(str8.match(/[aeiou]/gi)) //['a', 'a', 'i']

console.log(str8.match(/[aeiou]/gi).length)//3


//Check if a string is a palindrome.


const str9 = "madam";

console.log(str9.split(''))// ['m', 'a', 'd', 'a', 'm']
console.log(str9.split('').reverse())// ['m', 'a', 'd', 'a', 'm']
console.log(str9.split('').reverse().join(''))// madam

const str10 = str9.split('').reverse().join('');
if(str10 === str9){
    console.log('Palindrome')

}else{
    console.log('not a palindrome')
}

//Palindrome


const str11 = str9 === str9.split('').reverse().join('');

console.log(str11) //true


//Remove extra spaces from a string.

const str12  =  "  Hello   world   ";


console.log(str12.trim()) //Hello world

//Count the frequency of each character in a string.

const str13 = "apple";

const str14 = str13.split('').reduce((acc,val)=>{
    acc[val] = (acc[val] || 0)+1
    return acc
},{});
console.log(str14) //{a: 1, p: 2, l: 1, e: 1}


//Convert a sentence to camelCase.


const str15 = "hello world again";  // o/p  helloWorldAgain

console.log(str15.split(' ')) //['hello', 'world', 'again']


const str16 = str15.split(" ").map((val,index)=>{
   return index === 0 ? val :val[0].toUpperCase() + val.slice(1)
})

console.log(str16)


//Find the first non-repeating character.

const str17 = "aabbcddee";


/*

// Java Script Scope


 there are 3 types of scopes in java script

 Global scope --->varibale declared  out side of function  will have  Global scope

 local scope --->varibale declared with in a function will have local scope

 Block Scope ---->Variables declared with let and const will have block scope

*/
 // example for Local scope 


 function localScope(){
    let local ="Bamgalore"
    console.log(local) //Bamgalore
 }

 localScope()   
  //console.log(local) // ReferenceError


 // example for block scope 


 {
    let block_variable = 2
    console.log(block_variable)
 }

 //console.log(block_variable) //ReferenceError


 //  Hoisting 


/* Hoisting is a  Default behaviour in js moving declarions to the top of the current scope

variables defined with let and const  are also hoisted but not initialized
the block of code is aware of it . but it can not be used until and unless the variable is declared




*/


// Hoisting Examples


console.log(hoist); //undefined
var hoist = 100;
console.log(hoist) // 100


var w; // declaration is hoisted to the top

console.log(w) // undefined

w = 10 // assignment stay in place

console.log(w) //10


// using let and const 


// console.log(y); //Reference Error
let y = 20 ;


function test(){
    console.log(x); // undefined
    var x = 10 
    console.log(x) // 10

}

test()

var xx = 10;
var xx = 200;
console.log(xx) //200


if(true){
    var a1 = 10;
    let a2 = 20;
    const a3 = 30;
}

console.log(a1)// 10
//console.log(a2)// ReferenceError
//console.log(a3) //ReferenceError


// use strict

/*  strict mode make it easier to write secure Java script    


 // with out strict mode 

  use_variable = 10000000 ;
  console.log(use_variable) // 10000000


 // using strict mode
  "use strict"

  use = 100
  console.log(use) // SyntaxError

  */


  // This Keyword


/* in an Object this refrers to the owener of the method

when used alone it will refer to the Global window  


//  The this Keyword in js referes to the context  in which function is executed it value dependes on how current function is called 
//   not where it is defined*/


// Examples of this Keyword

// 1 Global context

console.log(this) // window object

// 2 in Regular function

function show(){
    console.log(this)
}

show() //  In non-Strict mode : window (globle) , in strict mode : undefined

// 3 inside  an Object method

// In object method  this refere sto the owner of the method

const obj1  = {
    name : "Rama",
    greet : function(){
        console.log(this.name)
    }
}
 obj1.greet() // Rama

 // 4 Arrow FUnction

 // NOTE  : Arraow function wont support this keyword

 const obj2  = {
    name: "Laxman",
     sayHi : ()=>{
        console.log(this.name)
     }
 }
 obj2.sayHi() // Refers to the global object name


 // Regular function


 const obj3  = {
    id : 12,
    sayHi(){
        console.log(this.id)
    }
 }
 obj3.sayHi() //12


 //5. Constructor Functions


 function funOne(name){
    this.name = name
    console.log(this)
 }

 const obj4  = new funOne("Sripad") //{name: 'Sripad'}


 //  6. Event Handlers

 /*document.getElementById("btn").addEventListener("click",function (){
    console.log(this) // refers to the element
 })


 //But using arrow function:

 document.getElementById("btn"),addEventListener("click", ()=>{
    console.log(this)//// Inherits from outer context (usually window)
 })
*/

 // call, apply bind

 // call apply bind are the predefined  methods in Js used to invoke a method  with owener object as argument

 function showName(){
    console.log(this.name)
 }

 const obj5 = {name:"Rahul"};

 showName.call(obj5) //Rahul
 showName.apply(obj5)// Rahul

 const boundFun = showName.bind(obj5)
 boundFun() //Rahul


 const obj6 ={
    fulName : function(){
        return this.name + " " + this.Id
    }
 }

 const obj7 = {name :"Sripad Amballa", Id :"Q0005158" }

 console.log(obj6.fulName.call(obj7)) //Sripad Amballa Q0005158

 

 // Arrow Function

 // Arrow functions are declared in a single line  this works only if the  function has only one statement 


 var hello  = ()=>{
    return "Hello  World"
 }

console.log( hello()) //Hello  World

// Limitations of Arrow Function

/* Arrow function  do not have their own this they inherit this from the surronding scope
so not suitable for call apply bind methods
can not be used as constructor
Arrow functions do not have their own arguments object.

ex :1 
const arrowFunc = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

arrowFunc(1, 2, 3);

*/


// FUNCTIONS

/* In java script functions are defined with function keyword

there are  different types of functions in Js
 function declarions
 function Exressions
 Arrow Functions
 Self invoking function
 */

 // Function Declarations

 function funtwo(){
    console.log("Hello function declaration") //Hello function declaration
 }
 funtwo();

 const s = function funThree(){
    console.log("Welcome")
 }
 s()//Welcome


 // Function Expressions

 // function expressions are also called as Anonymous function ( a function with out name) and they are alway invoked by using a variable name

 const c = function(){
    console.log("Hello function expressions")//Hello function expressions

 }
 c()

 // function Declarions are hoisted

 console.log(square(5)) //25

 function square(a){
    return a*a
 }

 // function Epression Hoisting

 // hoisting of function expressions are is not possible

 //console.log(e())//ReferenceError

 const e = function sqare1(n){
    return n*n
 }


 // function scope 

  // variables defined inside a function can be accessible outsome the function

  // slef Invoking function

  /* function epressions can be made as self invoking 
  a function can be invoked on its own w
  Note : you can not self invoke a function declarion */

/*
  (function() {
    console.log("Self Invoking function");
  })();

  */

  // Arrow Functions
  /* Arrow functions provide the shortest syntax for writing a function
     it wont require the function keyword and return keyword and curly braces 

     Hoisting is not possible in arrow functions */

    const arrow = (a,b)=>a+b;
    console.log(arrow(2,3))//5


    // Default Parameters

    // If a function is called with missing arguments the missing  values are set to the undefined

    function myFun(a,b){
        if(b=== undefined){
            b= 2
        }
        return a*b
    }
    console.log(myFun(4)) //8


    // Invoking function as method
    const obj8 ={
        id:"Q005158",
         get : function(){
            return this.id
         }
    }
    console.log(obj8.get()) //Q005158

    // Invoking a function with constructor

    function myFun1(fName,lName){
        this.firstName = fName;
        this.lastName = lName
    }
    const obj9 = new myFun1('Amballa','Sripad')
    console.log(obj9.firstName)//Amballa


 /* 

function declarions

hoisting is possible 
invoked by using function name
can not be made as self invoking function


function expressions

also called as anonymous functions
hoising is not possible 
inoved by using a variable
can be made as self invoking function


Arrow function

hoisting is not possible in arrow function
this key word is used in arrow function
can not support predefined methods like call  apply bind
can not be used as constructors

*/
// call apply bind


// Used to invoke a method with owner object as an argument

// call()


const obj10 ={
    fullName :function(){
        return this.Name + " " + this.Id 
    }
}

const obj11 = {Name : "Datta Teja",Id :234}

console.log(obj10.fullName.call(obj11)) //Datta Teja 234

// call method with Arguments


const obj12 = {
    getDetails : function (Id,address){
        return this.Name + " "+ Id +" "+ address
    }
}

const obj13 = {Name:"Datta Teja"}


console.log(obj12.getDetails.call(obj13,234,"Donkeshwar")) //Datta Teja 234 Donkeshwar

// call method take arguments seperately


//apply

console.log(obj12.getDetails.apply(obj13,[456,"DNK"])) //Datta Teja 456 DNK


// bind

const bind_Value  = obj12.getDetails.bind(obj13,111,"NZB")

console.log(bind_Value()) //Datta Teja 111 NZB


// call  apply bind()

// used to invoke a method with ower object as an argument

// difference b/w call apply bind



/* 
 all three  methods takes 2 arguments first arguments has owener object seconds argument has follows
call method takes arguments seperately ( take individual arguments)
apply method take array of arguments
bind method is similar to the call the difference is it not invoked directly

*/


// Closure


/* function along with its lexical scope bundled together called closure

the variable which are declared inside the parent function can accessible by it's child functions  

A closure can be defined as Js feature in which the innerfunction has access to the outfunction variable */




function outer(){
    var x = 363;
   return  function inner(){
    return x
    }
     
}
const output = outer()
console.log(output())//363

function parent(){
    let counter =0;
    function child(){
        counter++
        console.log(counter)
    }
    return child
}

const increment = parent()

increment() //1
increment()  //2
increment() //3


function  multiply(a){
    return function(b){
        return a *b
    }

}

const double  = multiply(2)
console.log(double(5)) //10


function createCounter(){
    let count =0;
    return function(){
        count++;
        console.log("count is :", count)
    }
}

const counter1 = new createCounter();
counter1() // count is : 1
counter1() //count is : 2
counter1() // count is : 3


const counter2 = new createCounter();

counter2() //count is : 1

// for counter2 value does not start with the 4 becaues counter2 is  new object /function



// JAVA SCRIPT OBJECTS


/*

In JS every almost every thing is an object

Boolean can be object if defined with new keyword
Numbers can be object if defined with new key word
Strings can be object if defined with new key word
Date,Math,functions ,regular expressions and array are always objects


All JS values are object except primitive

there are 5 different type primitive data types

String
Number
Boolean
null
undefined


 different between the objects and arrays

 objects are called by its named index Arrays are called by numeric index


  // CREATING A JS OBJECT

  there are different ways to create an object

  1 Create a single object ,using an object literals

  2 create a single object with the  new keyword

  3 Define an object constructor and then create object of the constructor type
  
  4 create Object using Object.create()

  */

  // 1 Using an Object literal

  const person1 = {};
  person1.name = "Sripad";
  person1.id = "Q0005158";
  person1.age = 27;

  console.log("User Name is :" ,person1.name +" \n" + "ID :",person1.id + "\n" +"Age :",person1.age ) 

  /* O/p 

User Name is : Sripad 
ID : Q0005158
Age : 27


Here I have used escape charecter \n it will return in a new line
*/


// 2 Using a New Key word

 const person2  = new Object()

 person2.city = "Nizamabad";
 person2.state  = "Telangana";


 console.log("User City",person2.city + "\n" + "User State",person2.state)


 /*  o/p

User City Nizamabad
User State Telangana

*/

// For better readability and similicity and execution speed use  Object literal method




/*
 Note : Mutable mean can be able to change or modified after created

 Js objects , functions , arrays are mutable --->mean we can able to changes its peoperties

 //Immutable ---> can not be changes or modified


 String , Number , Boolean , Undefined, null are immutable

 */

 // Js Object are Mutable 


 const person3 = {
    name: "Rama",
    address : "Ayodhya"
 }

 const  person4 = person3

 person4.address = "Ayodhya UP";
 person4.State ="UP";
 console.log(person3.state + " "+ person3.address) //undefined Ayodhya UP
 console.log(person4.state + " "+ person4.address) //undefined Ayodhya UP


 //* Here person4 is not a copy of person3 both person3 and person4 refering to the same object if you make any changes in person4 object will get reflect in person3 object


 // there are 2 diffrent  ways to acces the object properties

 const person5 ={name:"Rama"};

 console.log(person5.name) //Rama
 console.log(person5["name"])//Rama


 // for in  

 // for in iterates over the keys and suitable for object

 const siblings = {
    one:"Rama",
    two:"Bharata",
    three :"Laxman",
    four :"Shatragn"

 }

 let store_siblings ="";

 for(let i in siblings){
    console.log(i)  //one two three four

    console.log(siblings[i])  //Rama Bharata  Laxman Shatragn
    store_siblings += siblings[i] + " "
 }

 console.log(store_siblings) //Rama Bharata Laxman Shatragn 


// Adding New Propertis to an object
// Adding New Properties to an object
const subjects = {
    paper1: "Telugu",
    paper2: "Hindi",
    paper3: "English" // corrected key
  };
  
  subjects.paper4 = "Maths"; // Adding new property
  console.log(subjects.paper4); // Output: Maths
  console.log(subjects); // Optional: to see the full object

  // Deleteing a Property

  delete subjects.paper2
  console.log(subjects.paper2) //undefined
  console.log(subjects) // object 


  // Delete Operator is designed to be used on object properties it has no effect on variables and function
  // Delete Operator should not be used on predefined object properties it can crash your application


  // Nested Objects

   const myObj = {
    name: "Rama",
    car :{
        car1 :"Ford",car2:"BMW"
    }
   }

    const info ={
        fullName : "Sripad Amballa",
        address : "Nizamabad Donkeshwar",
        vehicles : [{name:"Ford", modal:"Mustang"},{name:"BMW", modal:"320 x3"}]

    }
let carsInfo =""
     const getInfo = info.vehicles.map((name,index)=>{
        carsInfo += name.name + " " + name.modal+ " "
     })


     console.log(carsInfo) //Ford Mustang BMW 320 x3
    

     // OBJECT METHODS


     // Object.assign()

     /* Object.assign method will copy all enumerable  own properties from one or more source object to the target object
     
     // It return a modified target object ( new Object)

     */

      const one  = {a:1, b:2};
       const two = {b:4,c:5};
        const newTraget = Object.assign({}, one,two);

        console.log(newTraget) //{a: 1, b: 4, c: 5}
        console.log(one) //{a: 1, b: 2}
        console.log(two) //{b: 4, c: 5}

        // here my target object is {} and  source object is one two so after object. assign my target object will get change
        

        const s1 = {a:20, b:30}
        const s2  = {b:40, c:50};
        console.log(Object.assign(s1,s2)); //{a: 20, b: 40, c: 50}
        console.log(s1) //{a: 20, b: 40, c: 50}
        console.log(s2) //{b: 40, c: 50}


        // here my target object is s1 and source object is s2 after object.assign your target object will get change 
        
        

        // Cloning an Object


        const myObj1 = {a:20};
        const copy = Object.assign({},myObj1);

        console.log(myObj1) //{a: 20}
        console.log(copy) //{a: 20}


        //merging Objects

         const o1 = {a:1}
         const o2 = {b:2};
        const o3 = {c:3};

         const merge = Object.assign(o1,o2,o3); // Object.assign({}, source)
         // the first argument is target object remaining are sourcer object so only target object will change

         console.log(merge) //{a: 1, b: 2, c: 3}
         console.log(o1) //{a: 1, b: 2, c: 3}
         console.log(o2) //{b: 2}
         console.log(o3) //{c: 3}


         // Merging Objects with same Properties

         const p1 = {a:1,b:2,c:3};
         const p2 = {b:4,c:6};
         const p3 ={c:10,d:25};

         const obj15 = Object.assign({},p1,p2,p3) 

         // Here target object is {} source objects are p1,p2,p3

         console.log(obj15) //{a: 1, b: 4, c: 10, d: 25}

         console.log(p1)//{a: 1, b: 2, c: 3}
         console.log(p2) //{b: 4, c: 6}
         console.log(p3) //{c: 10, d: 25}

         

         // 2 Object.Create()

         /* Object.create method creates a new object using existing object as proptotype of newly cretae object */


         const create ={
            isHuman :false,
            printInfo :function(){
                console.log(`My Name is ${this.name} AM I human? ${this.isHuman}`)
            }
         }

         const me  = Object.create(create);

         me.name= "Jay"
         me.isHuman = true;
         console.log(me.name) // true
         console.log(me.isHuman) // true

         me.printInfo() //My Name is Jay AM I human? true

         console.log(me.name) //Jay
         console.log(me.isHuman) //true


        // 3 Object.entries()

 //Returns an array of key/values of the enumerable own properties of an object

         const  entry = {
            10:"Arvind",
            2:"Rahul",
            7:"Vihan"
         }

         console.log(Object.entries(entry))


         /* o/p  [
                    ["2","Rahul"],
                    ["7","Vihan"],
                    ["10","Arvind"]
                ]
        */


                console.log(Object.entries(entry)[2]) // ['10', 'Arvind']


// 4 Object.freez()

/* Using Object.freez method we can not able to ADD/EDIT/DELETE  the properties of an object */


const loc = {
    place : "Hyderabad",
}

// Before freez

console.log(loc.place) //Hyderabad

// able to update

loc.place = "America"
console.log(loc.place) //America

// able to delete
 delete loc.place
 console.log(loc.place) // undefined

 // able to add
 loc.state ="NYC";
 console.log(loc) //{state: 'NYC'}


const state = {"city":"Hyd"}

Object.freeze(state)

// After freez

// can not able to ADD

state.vill ="Donkeshwar"

console.log(state) //{city: 'Hyd'}
console.log(state.vill) //undefined

// can not be able to EDIT

state.city ="NZB"
console.log(state) //{city: 'Hyd'}

// can not be able to DELETE

delete state.city
console.log(state) //{city: 'Hyd'}


// freez method for nested object


const employee ={
    name :"Sripad",
    address :{
        city :"HYD"
    }
}

Object.freeze(employee) 

//  here only Employee object is freez we can able to modify the child objects

employee.name= "Ram";
console.log(employee.name) // Sripad

employee.address.city = "BLG";
console.log(employee.address.city)//BLG

 employee.address.state ="TS"
 console.log(employee.address.state) //TS


 //  If parent object is freez still we can able to do modification in child object


 //5 Object.is()

 /* Object.is method is used to check whether two values are same it return true if same  else false */
 
 
 const c1 ={name:"Sripad"}
 const c2 = {name:"Sripad" }
 console.log(Object.is(c1.name,c2.name)) //true
 console.log(Object.is(c1,c2)) //false

 // 6 Object.seal()

 // Using Object.seal method user can not able to ADD/DELETE any properties 
 // but user can able to EDIT the object properties


 const papers = {subject:"Maths"}

 Object.seal(papers)

 // Can not able to Add
 papers.free =200
 console.log(papers) //{subject: 'Maths'}

 // can not able to DELETE

 delete papers.subject
 console.log(papers) //{subject: 'Maths'}

 // can be able to EDIT

 papers.subject ="JAVA";
 console.log(papers) //{subject: 'JAVA'}



 // 6 Object.values()

 // Object.values method return the values of an object in an array

 const val = {name:"Ram",id:1};

 console.log(Object.values(val)) // ['Ram', 1]


 // 7 Object.keys()

 // return the keys of an object in an array

 const key = {name:"Ram",id:2}

 console.log(Object.keys(key)) //['name', 'id']

 


 // using JSON.Stringify()


 // NOTE  : JSON ---> Java Script Object Notation


 const obj16 ={
    name: "Ram",
    id:1
 } 

 console.log(JSON.stringify(obj16)) //{"name":"Ram","id":1}


 // Stringify Dates

 const obj17 = {
    name:"Sripad",
    today:new Date()
 }

 console.log(JSON.stringify(obj17)) //{"name":"Sripad","today":"2025-06-18T12:46:23.559Z"}

 
 // NOTE : java script will not Stringify the functions


 const obj18 ={
    name:"Rama",
    id:1,
     info : function(){
return 10
     }
 }

 console.log(JSON.stringify(obj18)) //{"name":"Rama","id":1}


 // stringify the array

 const arr44 = ["Mac","Lenova","HP"];

 console.log(JSON.stringify(arr44)) //["Mac","Lenova","HP"]

 const arr45 = [1,2,3];
 console.log(JSON.stringify(arr45)) //[1,2,3]


 // JAVA SCRIPT OBJECT CONSTRUCTOR FUNCTION



 function Person1(first,last,age){
    this.fname = first;
    this.lname = last;
    this.age = age
 }

 const fun1 = new Person1("Rama","Surya",1);
 console.log(fun1.fname) //Rama

 const fun2 = new Person1("Sita","Surya",1);
 console.log(fun2.fname)//Sita

 // Adding New Property to the fun1  object

 fun1.address ="Ayodhya";
 console.log(fun1.address) //Ayodhya
 
 // address is added to the constructor function of fun1 
 // the address is can not be access for constructor function of fun2 
 // because fun1 and fun2 both are different instances

 console.log(fun2.address) //undefined


 // ADDING NEW PROPERTY TO THE CONSTRUCTOR FUNCTION

Person1.nationality ="Indian";

// we can able to add new Proprty after the constructor function is declared for the we need to use prototypes

console.log(fun1.nationality) //undefined
console.log(fun1) //{fname: 'Rama', lname: 'Surya', age: 1, address: 'Ayodhya'}


// Adding Method to a constructor 

 function Person2(name,age){
    this.name = name;
    this.age = age;
    this.details = ()=>{
        return this.name + " "+ this.age
    }

 }

 const fun3  = new Person2("Rama",25);
 console.log(fun3.details())  //Rama 25


 // JS OBJECT PROTO TYPES


 function Student(name,age){
    this.name =name;
    this.age= age
 }

 const stud1 = new Student("Rama",25);

 // Adding New Property to the constructor function

 Student.prototype.gender = "male";

 console.log(stud1.gender) //male
 console.log(stud1) // {name: 'Rama', age: 25}

 const stud2 = new Student("Laxman","23");
 console.log(stud2) //{name: 'Laxman', age: '23'}


 // PROTOTYPE

 //NOTE :  prototype is an object that is associated with every object and function by default in js


 // set()

 // set holds the uniques values  ( set is a collection of unique values)
 // set can hold any value and any data type


 // Create a set ()


 const letter = new Set([1,2,3,4,1,1])
 console.log(letter.size) //4
 console.log(letter) //{1, 2, 3, 4}


  // convert between Set and Array

  const arra43 = [1,2,2,3];
  const uniqueSet = new Set(arra43); // removes all duplicates

  console.log(uniqueSet) //{1, 2, 3}

  const uniqueArray = [...uniqueSet];
  console.log(uniqueArray) //[1, 2, 3]

 // Java script message boxes

 //alert("Hello Js Practice")

 // FUnction Practice Questions


 //What is the difference between a function declaration and a function expression?

  /* function declarations are hoisted
     function declaration are invoked by function name

     hoisting is not  possible function expression
      function expression are also called anonymous functions
      invoked by using a variable 

      console.log(square(2)) // 4

      function square(a){
      return a*a
      }  
      
      console.log(squares(2))// referenceError

       const squares = function(a){
       return a*b
       }

       */

       // 2 What will be the output?

       greets()

       function greets(){
        console.log("Hello !") // Hello !!
       }

       //greetings() // referenceErreor

       const greetings = function(){
        console.log("Heloo FUnction Expression")
       }

       //  3. Create a function using an arrow function that adds two numbers.

       const add  = (a,b)=>a+b;
       console.log(add(5,10))// 15

       // 4 What is an Immediately Invoked Function Expression (IIFE)?

        // IIFE are also called as self invoking function
        // only function exptression are self invoked IIFE is not possible in function declaration
/*
        (function(a,b){
            console.log(a*b)
        })(4,4)

        */


        // 5. Write a function that returns another function (closure example).

        function outers(){
            let count = 0;
            return function inners(){
                count++;
                console.log(count)
        }
        }

        const fun4 = outers()
        fun4() // 1
        fun4() // 2


        // 6. What will be the output?

        const person6 = {
            name: "Sripad",
            greet: function () {
              console.log("Hello, " + this.name);  // Hello Sripad
            },
          };
          
          person6.greet();

          // here this.name is refer to the person2.name 

          // 7 What is the value of this in the following arrow function?

          const person7 = {
            name:"A",
            greet : ()=>{
                console.log(this.name)
            }
          }
          person7.greet()

          // arrow function do not have their own this 
          // here this keyword  is refers to the global window if the greet method is inside the function declaration / expression it will refer to the person4 object


          // 8 Predict the output:

           function showThis(){
            console.log(this) // global window undefined
           }

           showThis()


           /* call, apply, and bind are predefined methods in JavaScript used to explicitly set the this value (i.e., the calling context) of a function.
They allow you to invoke or prepare a function to be called with a specific object as its this value. */


const user1 = { name: "Ram" };
const user2 = { name: "Shyam" };

function sayHi() {
  console.log("Hi " + this.name);
}
sayHi.call(user2) // Hi Shyam


// bind

const vehicle = {
    brand: "Toyota",
    getBrand: function () {
      console.log(this.brand);
    },
  };
  
  const brand = vehicle.getBrand.bind(vehicle)
  brand() //Toyota
  // Fix it using bind so it still logs "Toyota"



  //Create a function that uses rest parameters and returns the sum of all arguments.
  function sum(...args) {
  console.log(args) //[1, 2, 3, 4]

  return args.reduce((acc,val)=> acc +=val)

}

console.log(sum(1, 2, 3, 4)); // 10


//Write a higher-order function that filters odd numbers from an array.



const filterOdd = (arr) => {
    console.log(arr)
    return arr.filter(val=>val % 2 !==0)
  };
  
  console.log(filterOdd([1, 2, 3, 4, 5])); // [1, 3, 5]


  const person8 = {
    name: "Alex",
    sayName: function () {
      console.log(this.name);
    },
  };
  
  const say = person8.sayName;
  say(); // undefined global object

  console.log(person8.sayName()) // Alex

  // explanation person8.saynme is not a method so it will return the undefind or global window


  /*
  document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // What is `this`?
});

 NOTE  : with regular function this refers to the element that is triggered


 document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // What is `this`?
});


NOTE : with arraow function this is lexically scoped --does not point to the element


*/

//OBJECT METHODS PRACTICE QUESTIONS


 const person9  = {
    firstName : "Amballa",
    lastName : "Datta Teja",
     getFullName : function(){
        return this.firstName +  " " +this.lastName
     }
 }

 console.log(person9.getFullName()) //Amballa Datta Teja

// What is the output of the following

const users3 = {
    Id : "Q0005158",
    greet : function(){
        console.log("Hello,"+ this.Id +" "+ "Hello") 
    }
}
const greetFn = users3.greet
greetFn()

// output Hello,undefined Hello  

// here this refer to the global object since we are not user3.greet is not a method

const greetFn1 = users3.greet();
//greetFn1()

// output ---->  Hello,Q0005158 Hello


//3. Add a method isAdult() to a person object that returns true if age ≥ 18.


const person10 ={
    age : 27,
    isAdult : function (){
return this.age >=18 ? true :false
    }
}
console.log(person10.isAdult()) //  true


//4. Write a method inside an object that uses this to calculate total price from quantity and unit price.

const item  = {
    price: 100,
    quantity :3,
    total : function(){
return this.price * this.quantity 
    }
}
console.log(item.total()) //300


//5. Use Object.keys(), Object.values(), and Object.entries() to iterate over an object.

const cars = { make: 'Toyota', model: 'Camry', year: 2023 };

// print all keys
// print all values
// print all [key, value] pairs

console.log(Object.keys(cars)) // ['make', 'model', 'year']
console.log(Object.values(cars)) //  ['Toyota', 'Camry', 2023]

const objEntry = Object.entries(cars) //[['make', 'Toyota'], ['model', 'Camry'], ['year', 2023]]

console.log(objEntry)

//6. Clone an object using:

// Using Spread operator 

const obj19 = {name :"Shiva" ,Id:23};
const obj20 = {...obj19}
console.log(obj20) //{name: 'Shiva', Id: 23}

// using Object.assign()

console.log(Object.assign({},obj19)) //{name: 'Shiva', Id: 23}

// here  both spread operator and object.assign() create a shallow copy


// shallow copy example

const obj21 =  { name: "Shiva", details: { age: 30 } };

const clone1 ={...obj21}
console.log(clone1) //{ name: "Shiva", details: { age: 30 } };

clone1.details.age = 90;
console.log(clone1.details.age) //90
console.log(obj21.details.age) //90

// here you have updated clone1 object details method age  but the age will get update in obj19 object as well because of shallow copy it will take the same reference

const obj22 ={ name: "Shiva", details: { age: 30 } };
const obj23 = Object.assign({},obj22)

console.log(obj23) //{ name: "Shiva", details: { age: 30 } };
obj23.details.age = 100;
console.log(obj23.details.age) // 100
console.log(obj22.details.age) // 100


// shallow copy 
  /* After the object is cloned if you trying to update the cloned object property the property will get update in both object source and target object */

  // Deep copy

  const obj24 ={ name: "Shiva", details: { age: 30 } };
  const obj25 = Object.assign({},obj24);

  console.log(obj25) //{ name: "Shiva", details: { age: 30 } };

  console.log(JSON.stringify(obj25)) //{"name":"Shiva","details":{"age":30}}

  obj25.name ="Shivaya";
  console.log(JSON.stringify(obj24)) //{"name":"Shiva","details":{"age":30}}

  console.log(JSON.stringify(obj25)) //{"name":"Shivaya","details":{"age":30}}

  // here you have updated th name propery in obj25 due  to the deep copy it will get updated in obj25  not is source object 



  //8. How does this behave inside an object method vs an arrow function?

  const person11 = {
  name: "John",
  sayHello: function () {
    console.log(this.name);
  },
  sayHi: () => {
    console.log(this.name);
  }
};

person11.sayHello(); // Hello John
person11.sayHi();    //  Hello undedined refer to global window object


//9. Make a method that adds a new key-value pair to any object dynamically.

function addProperty(obj, key, value) {
  obj[key] = value
  }
  
  const user4 = {};
  addProperty(user4, "role", "admin");
  console.log(user4); // { role: "admin" }


  // obj[key] = value uses bracket notation, which allows setting dynamic property names.

  // this wouldn't work with dot notation like obj.key becaues that would literally assign to a propery named key  instead of using the variable's value
  

  //10. Convert the below object to an array of key-value pairs, then back to an object.

  const obj26 = {a:1,b:2};

  // Object.entries() convert object to array

  const obj27 = Object.entries(obj26)
  console.log(obj27) //// [['a', 1], ['b', 2]]

  //Object.fromEntries() converts array of kay value pairs into object

  const obj28 = Object.fromEntries(obj27)
  console.log(obj28) //{a: 1, b: 2}

  //11. Use call to borrow a method from one object to another.

  const user5 = {
    name: "Alice",
    greet: function () {
      console.log("Hello " + this.name);
    }
  };
  
  const user6 = { name: "Bob" };
  
  user5.greet.call(user6); // Hello Bob


  // 12. Object Iteration with Keys, Values, Entries

  const car3 = { make: 'Toyota', model: 'Camry', year: 2023 }
   Object.keys(car3).forEach(key=>console.log("key",key)) //key make key model key year
   Object.values(car3).forEach(value=>console.log("value",value)) //value Toyata value Camry value 2023
   console.log(Object.entries(car3)) 
/*
   [
    ["make","Toyota"],
    ["model","Camry"],
    ["year",2023]
]

*/
Object.entries(car3).forEach(([key,val])=>console.log(`${key} : ${val}`))


//  example 2 on Object.entries()


const operator  = {course :"Java Script", fee :2000};
const operator1  = Object.entries(operator)

console.log(operator1)  
/* The output using Object.entries method
[
    ["course","Java Script"],
    ["fee",2000]
]
    */

operator1.forEach((input)=>{
    console.log(input) // ['course', 'Java Script'] ['fee', 2000]
    let key = input[0]
    let value = input[1]
    console.log(key + ":" + value) // course:Java Script   fee:2000
}
)
// Object.assign()

 const obj29  = {
    name : "Sripad",
    age:25
 }

 const obj30 ={address:"Donkeshwar"};
const obj31 = Object.assign(obj29,obj30) // here source object is obj30 target object is obj29

console.log(obj31) //{name: 'Sripad', age: 25, address: 'Donkeshwar'}
console.log(obj29)// {name: 'Sripad', age: 25, address: 'Donkeshwar'}

// Object.assign method will do the shallow copy 

// Thse same operation we can able to achieve using spread operator(...obj);

const obj32  = {a:10, b:20}
const obj33 = {c:40}

const obj34 = {...obj32, ...obj33};
console.log(obj34)//{a: 10, b: 20, c: 40}

console.log(obj32) //{a: 10, b: 20}

// retriving the key and value of an object using for in


// for in iterares overs the keys 

const city ={name : "Hyderabad",population :"1 crore"};


for (let x in city){

     // console.log(x) // name   //population

    console.log(` ${x} : ${city[x]}`)
}

// Oput put   name : Hyderabad    
//            population : 1 crore


// JAVA SCRIPT NUMBERS


// Numbers are the primitive data types  and primitive data type are Immutable


// toString()

const num1  = 2025;
console.log(num1.toString()) // 2025
console.log(typeof(num1.toString())) // string


// 10  is an integer  10.44 is a float 

// SCOPE


// Global  scope 

// variable declared outside the function or ouside a black will have global scope 
// varibale which are declared in global scope are accessible  anywhere


// FUNCTION SCOPE 

// variables which are declared inside the function will have the local/ functional scope
// varibale which are accesible insid ethe function only not outside

// BLOCK SCOPE 

// variable which are declared inside a block i.e.,{} will have block scope 
// only let and const variables will have the block scope
// functions are also have block scope in strict mode

// SCOPE  CHAIN EXAMPLE



const scope1 = "Sripad";  // global scope

first()

function first(){
  const b = "Hello"; // local to first
  second()
  function second(){
    const c  = "Hi"; // local to second
    third()
  }
}

function third(){
  const d  = "Hey"; // local to third
   console.log(d) // Hey
   
}


// Explanation

/*
scope1  can ba accessible any where it has gloabla scope 

inside first()  ---> can access  scope1 , b
inside second() ---> can access scope1, b,c because second is present inside the first function
inside third() ---> can access scope1 d 

*/
// HOisting is a default behaviour in js movind declaration to the top of the current scope

// variable defined with let and const are also hoisted but they are not initialized with default values like var
// an exception will be thrown if a variable declared with let and const is read before it initailized

// BASIC EXAMPLES

let a4 =10;
//let a4 = 30 // SyntaxError  ( redeclaration is not possible using let and const)

 //const a5 ;
 //a5 = 200; // syntaxError (if a varaible is declared with const must be initalized ) // Reassignment is not possible


 const a6 = 200;
 //a6 = 2000
 //console.log(a6)// TypeError  (reassignment is not support using const)

//console.log(a7) // ReferenceError
 let a7 = 100


 var a8 =  100
 {
  let a8 = 200
  console.log(a8) //200 /// a8 has local scope
 }


 let a9 = 100

 {
  //var a9 = 200 // syntaxError  // bacuse a9 has global scope
 }
  

 //LEXICAL SCOPE

 // children scope will have access to the variable defined in parent scope

 function fun5(){

  var frt1  = "Banana"; // local scope
  let frt2  = "Orange"; // local scope
  const frt3 = "Mango"; // local scope
  function fun6(){
    console.log(frt1 +" "+ frt2 + " "+frt3) //Banana Orange Mango
  }
  fun6()
 }
 fun5()
 //console.log(frt1) //ReferenceError
 //console.log(frt2) //ReferenceError
 //console.log(frt3) //ReferenceError


 // this Keyword examples


 function fun7(){
  let id = 123
  console.log(this.id) // refers to the global window object
 }

 fun7()


 function fun8(id){
   this.id =123
  console.log(this.id) //123
 }

fun8()


var a10 = 100

function whoIsThis(){
  var a10 = 200;
  console.log(a10)// 200
  console.log(this.a10) // 100  refers to global varible 
}

whoIsThis()

 const laptop1 ={
  cpu : "i5",
  ram : 16,
  compare: function(){
    console.log(this.cpu) // i5
  }
 }

 const laptop2 = {
  cpu :"i8",
  ram:16
 }

 laptop1.compare(laptop2)  // i5
 laptop1.compare.call(laptop2)  // i8


 // HIGHER ORDER FUNCTIONS


 // A function which takes another function has an argument and returns a function is called higher order function


 const radius = [3,1,2,4];

 const area = function(radius){
  return Math.PI * radius * radius  //PI r2
 }
  const circumference = function(radius){
    return 2* Math.PI*radius // 2 PI r
  }
   const res = radius.map(area);
   console.log(res) //[28.274333882308138, 3.141592653589793, 12.566370614359172, 50.26548245743669]

   // Binary of array

   const arr46 = [5,1,3,2,6];

   const binary = arr46.map(a=>a.toString(2))
   console.log(binary) //['101', '1', '11', '10', '110']


// Get Event Numbers

const arr47 = [5,1,3,2,6];

const arr48 = arr47.filter(a=>{
  return a % 2=== 0;
})
console.log(arr48) // [2, 6]

// SUM

const arr49 = [1,2,5,7,2];

const arr50 = arr49.reduce((acc,val)=>{
  return acc += val
})
console.log(arr50)//17

// GET MAX VALUE

const arr51 = [5,1,3,2,6]

const arr52 = arr51.sort((a,b)=>b-a)

console.log(arr52[0]) //6

const arr53 = arr51.reduce((acc,cur)=>{
  if(cur >acc){
    acc= cur
  }
  return acc
},0)

console.log(arr53) //6

// DESTRUCTURING

//  Extracts data from arrays object maps and set them into new distinct varibale
// it will allow us to extract multiple properties or item from an array at a time


// WITH OUT DESTRUCTURING

const obj35 ={
  fname : "Sripad",
  address : "Donkeshwar",
  city1:"Nizamabad",
  state1 :"Telangana"
}

const fName = obj35.fname
console.log(fName) //Sripad

const addr  = obj35.address
console.log(addr) //Donkeshwar

// OR
console.log(obj35.fname) //Sripad
console.log(obj35.address)//

// WITH DESTRUCTURING

const {fname,address,city1,state1} = obj35

console.log(state1) //Telangana
console.log(city1) //Nizamabad


// DESTRUCTURING AN OBJECT AND ASSIGNING A NEW VARIABLE

const {fname : name ,address:addrs,city1 :town,state1:state2} = obj35

console.log(name) //sripad
console.log(addrs) //Donkeshwar
console.log(town) //Nizamabad


// ARRAY DESTRUCTURING  

const arr54 = ["Rama","BHARATA","LAXMANA","SHATRAGNA"];

const [,,ex,] = arr54
console.log(ex) //LAXMANA

const [son1,son2,son3,son4]= arr54

console.log(son1) //Rama


// Call back function 

/* A call back is a function  passed an argument to the another function */

// Example on call back function

function display(greet){
console.log(greet)

}
function myCalculator(num1,num2,callback){
  let sum = num1 + num2;
  callback(sum)

}
myCalculator(500,200,display) // 700

/* NOTE : when you pass function as an argument , remember not to use parenthesis

myCalculator(5,5,display)--->Correct 
myCalculator(5,5,display()) ---->Wrong XXX

*/

function open(accessFile){
  console.log("The File is Open")
  accessFile()
  
}

function read(){
  console.log("Now you can read the File")
  close()
}

function close(){
  console.log("File is closed")
}
open(read) 




/* Execution Sequence 

The File is Open
Now you can read the File
File is closed
*/

// Generator Function


// generator function returns an iterator  which can be used to stop the function in middle do something and then resume it whenever 

//A normal function starts and exucting and returns when the function is completed but generative functions can be stopped any number of times and resumed it later




/*
function normalFun(){
  let no  = 1 ;
  while(no ==0){
    console.log(no) 
  no++;
}
}
normalFun()  // output is 1,2,3,4,5,6,7..............infinite

// the ablove function will run infinite number of times but using genrator function we can stop the function any number of times

*/


// syntax and example for genrator function


function* generatorFun(){
let no = 1000;
while(true) yield no++

}

const iterator1 = generatorFun()
console.log(iterator1) //generatorFun {<suspended>}

console.log(iterator1.next().value) // 1000
console.log(iterator1.next().value) // 1001



// invoking a genartor function from another generator function


function* gen1(course){
  yield `gen2 course ${course}`
}

function* gen2(course){

  yield `HI ${course}`
  yield* gen1(course) // here we are invoking gen1 function so for yield use *
  yield "Hello !"

}

const iterator2 = gen2("JAVA SCRIPT");

console.log(iterator2.next().value); //HI JAVA SCRIPT
console.log(iterator2.next().value); // gen2 course JAVA SCRIPT
console.log(iterator2.next().value); // Hello !


// Passing arguments into genartor function

 function* gen3(){
  console.log('HI',yield);
  console.log('How are you',yield)
 }
 const iterator3 = gen3();
 iterator3.next();
 iterator3.next("Sripad") //HI Sripad
 iterator3.next("Amballa Sripad") //How are you Amballa Sripad

// Once Returned no more yields

function* gen4(){
  yield 'Hi Rama';
  return "Jai Sri Ram"
  yield 'Stoped'
}

const interator4 = gen4();

console.log(interator4.next()) //{value: 'Hi Rama', done: false}
console.log(interator4.next()) //{value: 'Jai Sri Ram', done: true}
console.log(interator4.next()) //{value: undefined, done: true}

// No more yield after the return statement is executed



// Factory Functions


/* factory functions are similar to the constructor function but istead of using new keyword to create an object 
factory functions simply creates an object and returns it */


// Factory function examples


function factory1(name){
  return{
    name : name,
    talk : function(){
      console.log("My Name is",name +" "+"the robort")
    }
  
  }
}

const obj36 = factory1("Chitti");

obj36.talk() //My Name is Chitti the robort

const obj37 = factory1("Chitti 2.0");
obj37.talk() //My Name is Chitti 2.0 the robort

obj37.age = 20;
console.log(obj37.age) //20
console.log(obj36.age) //undefined


//example 2

function factory2(name,pin,city){
  name = name;
  pin = pin;
  city = city;
  return {
    details: function(){
      console.log("Hi",name,+" "+pin + " ",city)
    }
  }
}

const obj38 =factory2("Sripad",123,"NZB");
obj38.details() //Hi Sripad 123  NZB

/* factory functions are similar to the constructor function but instead of new keyword to create an object. factory functions creates an object an retuns it */

// forEach eaxmple

const arr55 = [1,2,3,4]

 //forEach returns undedined
 console.log(arr55.forEach(no=>no)) // undefined

 const arr56 = arr55.forEach(no=>no);
 console.log(arr56) //undefined


 arr55.forEach(no=>console.log(no)) // 1,2,3,4


 // Higher order functions


 const companies   = [
  {name:"company1",categery:"Finance",start:1981,end:2003},
  {name:"company2",categery:"Retail",start:1992,end:2008},
  {name:"company3",categery:"Auto",start:1999,end:2007},
  {name:"company4",categery:"Retail",start:1989,end:2010},
  {name:"company5",categery:"Technology",start:2009,end:2014},
 ]



 // Using Simple Loop


 for ( let i=0; i<companies.length;i++){
  //console.log(companies[i]) // returns entire companies object
 }

 // Using forEach

 companies.forEach((val,index,arr)=>{
  //console.log(val) // returns the entire object
  //console.log(val.name) // returns the names of each company
  //console.log(index) // returns of exah object index
  //console.log(arr) //retuns the entire array
 })


 // filter onlt Retail Companies

const retailCompanies =companies.filter(val=>val.categery==='Retail'? val.categery :"");
 console.log(retailCompanies) // retuns the Retails companiew objects

 // Get 80's Companies


const eightysStartCompanies  = companies.filter(company =>(company.start >1980 && company.start<1990)?company.start:"");
console.log(eightysStartCompanies) // fetch the companies start date in b/w 1980 to 1990

// Sort the companies based on year 


const companiesSort = companies.sort((a,b)=>{
  return a.start -b.start
})
console.log(companiesSort)


const ages = [33,12,20,16,5,54,21,44,66,13,32];


// using for loop  fetch a>21

const canDrink =[];

for(let i =0 ; i<ages.length;i++){
  if(ages[i]>=21)
    canDrink.push(ages[i])
}
console.log(canDrink) // [33, 54, 21, 44, 66, 32]

// using filter method

const canDrink2 = ages.filter((val)=>{
  if(val >=21){
    return true
  }
});
console.log(canDrink2)

const canDrink3 = ages.filter(val => val >= 21);
console.log(canDrink3)

const agesSum = ages.reduce((acc,val)=>{
 return  acc += val

},0) 

const arr100 = ages.reduce((acc,val)=>acc+= val)

console.log(arr100)


// Practice

//Using Map method the Original array does not affects the loop
// the Length of the arry is fixed in map method


/// get event numbers using map method   [true, true, true, false, true, false]
const arr57 = [20,30,2,75,12,51]
const arr58 = arr57.map(val=>val%2==0);
console.log(arr58) // [true, true, true, false, true, false]

const arr59 = arr57.map(val=>{
  if(val % 2 ==0){
    return val
  }
})
console.log(arr59)//[20, 30, 2, undefined, 12, undefined]

// Map  method maintain the original length of the array


// SORT
const arr60 = [200,30,5,100,"sri","qbc",[],{}]

console.log(arr60.sort()) // [Array(0), 100, 200, 30, 5, {…}, 'qbc', 'sri']

// if array consists of mixed data using sort method first evey thing is converted into string


// if you want to retrieve only numbers

const arr61 = arr60.filter(val=>typeof val =='number');
console.log(arr61) //[100, 200, 30, 5]

//if you want to retrive only strings

const arr62 = arr60.filter(val=>typeof val =='string');
console.log(arr62) //['qbc', 'sri']

// Constructor Object Function

function ObjectFun(name,phone,address){
  this.name = name,
  this.phone = phone,
  this.address = address
}

const obj39 = new ObjectFun("Chinnu",1234,"DOnkeshwar")
console.log(obj39) //{name: 'Chinnu', phone: 1234, address: 'DOnkeshwar'}

obj39.car = "Audi"
console.log(obj39) // {name: 'Chinnu', phone: 1234, address: 'DOnkeshwar', car: 'Audi'}
console.log(obj39.car)//Audi

const obj40 = new ObjectFun("Datta",34545,"DNK");
console.log(obj40) // {name: 'Datta', phone: 34545, address: 'DNK'}


// Adding Propery to the function
ObjectFun.prototype.pin = 500300;

console.log(obj39)
console.log(obj39.pin) //500300
console.log(obj40)  //{name: 'Datta', phone: 34545, address: 'DNK'}
console.log(obj40.pin) //500300
//Even though pin is not an own property of obj39 and obj40  it's available through the protytype chain

// Here car property is assigne to obj39 instance not to the obj40
// if you want to use car proporty for obj40 use __proto__ concept

obj40.__proto__ = obj39

console.log(obj40.car) //Audi

// Other ways to access car for obj40 instance
obj40.__proto__ = Object.assign(arr40.__proto__,arr39)

console.log(obj40.car)

// call()  apply()  bind()


// Used to invoke a function by passing a reference that points to the this variable inside the method

const vehicle1 ={
  name:"Pulser",
  model:150

}
const vehicleDetails ={
  details :function(){
    return this.name  + " "+this.model
  }
}

console.log(vehicleDetails.details.call(vehicle1)) //Pulser 150


// example

function P1(name,id,address){
  this.name = name,
  this.id = id,
  this.address= address
}


function P2(name,id ,address,age){
  P1.call(this,name,id,address)
  this.age = age
}

function result11(){
  return this.name +" "+this.id+" "+this.address+" "+this.age
}

const C1 = new P1("RAMA",25,"Ayodhya");
console.log(C1) //{name: 'RAMA', id: 25, address: 'Ayodhya'}
console.log(result11.call(C1)) //RAMA 25 Ayodhya undefined



const C2 = new P2("JAY",2300,"HYD",20);
console.log(C2);  //{name: 'JAY', id: 2300, address: 'HYD', age: 20}
console.log(result11.call(C2)) //JAY 2300 HYD 20

// Closure
// function along with its lexical scope bundled together is called closure

function arithmetic(a){
  let n= 5;
  let m= 100;
  return  function multiplication(){
   return  n*a
  }


}
const arith = arithmetic(10);
console.log(arith())//50

function addition(a){
  return function add(b){
    return a+b
  }

}

console.log(addition(10)(50))//60


// spread operator

// Spread Operator in Array

const arr63 = [1,2,3]
let num3 = 4;
num3= [...arr63,num3];
console.log(num3) // [1, 2, 3, 4]


const arr64 =[5,6];
const combine = [...arr63,...arr64]
console.log(combine) // [1, 2, 3, 5, 6]


// Spread Operator in Objects

const obj41 ={a:1,b:2}
const obj42 = {c:3};
const objSpread = {...obj41,...obj42};
console.log(objSpread)// {a: 1, b: 2, c: 3}
console.log(obj41)//{a: 1, b: 2}


const obj43 ={a:10,b:20};
const obj44 = {...obj43,x:40,y:30};
console.log(obj44) //{a: 10, b: 20, x: 40, y: 30}

// Spread Operator in function


function sum(a,b,c){
  return a+b+c
}

const arr65= [70,90,100]
console.log(sum(...arr65)) //260

// rest Operator
function myFun5(a,b,...many){
  console.log("a : ",a)
  console.log("b : ",b)
  console.log("many : ",many)

}
myFun5(10,20,40,4,43,56)

/*

a:10
b:20
many:[40, 4, 43, 56]

*/
console.log("Push COde to Git hub")













 











  







  
  



  


          


         
        







 

















 







 










           











  
























  






























  


  







   










  

 


    















 

















 









 
































