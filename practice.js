// JAVA SCRIPT QUESTIONS ON PROMISES


// 1 Create a Promise that resolves after 2 seconds with the value "Hello Promises"


const hello = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Return Hello  After 2 sec")
    },2000)
})
hello.then((val)=>{
    console.log(val) //Return Hello  After 2 sec
}).catch(err=>console.log(err))

//2 Convert the following callback-based function into a Promise:

 function  fetchData(){

return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Received")
    },1000)
})
   
}


async function fetch(){
const res = await fetchData();
console.log(res)
}

fetch() //Data Received

fetchData().then(val=>console.log(val)) //Data Received


//3 Write a function that returns a Promise which rejects after 3 seconds with the error "Something went wrong"

function rejectedData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Something  went wrong")
        },3000)
    })
}
rejectedData().then(val=>console.log(val)).catch(err=>console.log(err))


//Use Promise.all() to wait for 3 promises: one resolves after 1 sec, another after 2 sec, another after 3 sec. Return their values.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 Resolved after 1 second"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 Resolved after 2 seconds"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 Resolved after 3 seconds"), 3000);
});

Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val)}
).catch(err=>console.log(err))

// O/P    ['Promise 1 Resolved after 1 second', 'Promise 2 Resolved after 2 seconds', 'Promise 3 Resolved after 3 seconds']


// 5 Use Promise.race() to get the result of the first promise that resolves among three different promises.

Promise.race([promise1,promise2,promise3]).then(val=>{
    console.log(val) //Promise 1 Resolved after 1 second
}).catch(err=>{
    console.log(err)})


    // 6  Create a function that takes an array of numbers and returns a promise that resolves with the sum if all elements are numbers, else rejects.

   const  arr1  = [1,2,3]

    function checkNumber(arr){
        return new Promise((resolve,reject)=>{
            const output = arr.reduce((acc,val)=>{
                if(typeof val === 'number' && !isNaN(val)){
                        return acc + val ;
                }else{
                        return ("Not a Number")
                }
            },0)
            resolve(output)
            reject(output)

        })

    }
checkNumber(arr1).then(val=>console.log(val))

// 8 

const promise = new Promise((resolve, reject) => {
  resolve("First");
  reject("Second");
});

promise.then(res => console.log(res)).catch(err => console.log(err));


//9  Rewrite the following then-chaining code using async/await:

/*
fetchData()
  .then(data => process(data))
  .then(result => display(result))
  .catch(error => console.log(error));


 async function handleflow(){
    try{
    const data = await fetchData();
    const result = await process(data);
    display(data)
    }catch(err){
        console.log(err)
    }
  }

*/
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

wait(1000).then(console.log("1 second passed"));



function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "John" }), 1000);
  });
}

function getPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve([`Post1 by ${user.name}`, `Post2 by ${user.name}`]), 1000);
  });
}

getUser()
  .then(user => getPosts(user))
  .then(posts => console.log(posts));

/*
  //   Rewrite the below code using async/await:

  getUser()
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

  async function sample(){
    try{
    const req = await getUser();
    const res = await getPosts(req.id)
    console.log(res)
    }catch(err){
        console.log(err)
    }

  }

  sample()

  */

  //2. What is the output?

async function exampl1(){
    return "Hellooooo"
}
exampl1().then(console.log) // returns Promise of resolve value Hellooooo

//3. Fix the following async function:


async function test(){
    setTimeout(()=>{
       return  "done" 
    },1000)
}

console.log(test()) // {<fulfilled>: undefined}


// SetTimers has be wrapped inside the Promise so the asyn and await can handle properly

async function test2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("Done")},1000)
    })
}
test2().then((val)=>console.log(val)) //Done

//4. Create a function that waits for 3 seconds using await:



function delay(ms){
   return new Promise (resolve=>{
    setTimeout(()=>{
        resolve()
    },ms)
   })
}

async function test3(){
 console.log("Waiting for 3 seconds....")
 await delay(3000);
 console.log("3 seconds Passed")
}

test3()


// 5 Chain multiple await calls

//How can you improve this code to run all fetches in parallel?

/*
async function fetchDetails(){
    const res1 = await fetch(url1)
    const res2 = await fetch(url2)
    const res3 = await fetch(url3)   
}
// to trigger all api calls in parallel 

async will return a promise so we can use Promise.all method
fetch() method fetches resource from the network and returns a promise which is resolved once the response is available

// Sample Example
async function(){
    try{
    const res = await fetch(url);
    const data = res.json()
    }catch(err){
    console.errr("Eroor in Fetching Data",err)

    }
   
}

    */

async function fetchDetails(){
    try{
        const [res1, res2,res3]= await Promise.all([fetch(url1,url2,url3)])
        const [data1, data2,data3] = await Promise.all([res1.json(),res2(),res3()])

        console.log(data1,data2,data3)

    }catch(err){
        console.error("Error in Fetching the data",err)
    }

}
// If any one of the Fetch API fails the Promise.all() will get rejected
/* Fetch() method is used to fetch the resources from the network  and returns a promise which is fulfilled once the Promise is available
    fetch()Promise is rejected only when the network encountered
    fetch() Promise doen not reject on HTTP errors like 404  */


    // 6  Handle errors with try...catch

    //Add proper error handling.

    async function fetchData1(){

        try{
        const res = await fetch('wrongurl');
        const data = await res.json()
        console.log(data)
        }catch(err){
            console.error("Error in Fetching the data",err)
        }
      
        
    }

    //7. Can we use await outside an async function? Explain with an example.


    /*
     we can use await outside the asyn function  aysn function will returns a promise to handle that promise we are using await
     await will pause the execution and untill the promise is resolved
     if we use await ouside the async function it will throw syntax error
     
     */

  //8. Simulate sequential vs. parallel API calls with async/await


  // Parallel flow

  async function parallFetch(){

    try{
        const [res1, res2]  = await Promise.all([fetch('url'),fetch('url2')]);
        const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
        console.log(data1, data2)
        }catch(err){
            console.log("Error in fetching details",err)
        }
  }
  //parallFetch();

  // Sequential API trigering flow


  async function sequentialFetch(){
    try{
        const res1 = await fetch('url1');
        const data1 = await res1.json()
        console.log(data2)
        const res2 = await fetch('url2');
        const data2 = await res2.json()
        console.log(data2)
    }catch(error){
        console.error("Error in  Fetching",error)
    }

  }

  //  9. What is the difference between async/await and .then()?

  /* async  will make easier to write the Promise
    async will return a promise
    await is used inside the async function  will Pause the execution until the Promise is resolved
     error handling is done using try and catch()
     easy code redability

    then() will takes a 2 callback function one to handle the success condition and 2 is to handle the rejected condtion
    error handling is done using catch() methos will take a call back function 
    can become hard to manage with chaining

    */

    // 10. What does an async function return?

    // asyn function will return a Promise

    async function greeting(){
        return "Hell0"
    }
    const result = greeting()
    console.log(result)//Promise {<fulfilled>: 'Hell0'}

    // 11. What happens if you await a non-promise value?

    function square1(n){
        return n *n
    }

    async function data(){
        const res = await square1(10)
        console.log(res) //100
    }
    
    data()

    /* if we await a non promise value java script automatically wrap it in Promise.resolve(val) so your function still works  no error will be thrown
    
    it will consider as a promise and give the response */


    //12. How does async/await help improve code readability?

/* easier error handling using try and catch 
insted of .then() chains async/await lets you write code in top down step by step manner--just like regular function

// using async/ await asynchronus code will look like a synchronus

*/


//13. What is the use of try...catch with async/await?


// it will do the error handling in async an d await 



// 14 Output 

async function test1(){
    console.log(1);
    await console.log(2);
    console.log(3)
}
test1();
console.log(4)

// output  1 2  4 3


/* await only waits for promises --not regular synchronus functions like console.log

console.log is a synchronus function
so when the js egine reaches await console.log(2) 
it will immediately executes console.log(2) just like normal function

then it will treats like await undefined because console.log() returns undefined

since await is waiting on undefined it just pauses the rest of the function */


//15. Await with synchronous values:

async function test3(){
    const a = await 1000;
    console.log(a)
}
test() //1000

// In JS when you use await with non-promise (synchronus) value like number string or boolean js automatically wrap it in a resolved promis
// internall  await 10 is treated like await Promise.resolve(10) 



//Write a function that:

//fetches user data from https://jsonplaceholder.typicode.com/users

//waits 2 seconds between each user fetch using await

async function usersData() {

    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok){
        throw new Error("HTTP ERROR ! STATUS",res.statusText)
    }
    
    const data1 = await res.json();

for (const user of data1){
    console.log(user)
    await new Promise(resolve=>setTimeout(resolve,2000))
}
    
    }catch(err){
    console.error("Error in Fetching Data",err)
    }
}
  
//usersData();

// Generator Function examples

// Generator function returns an iterator which is used to stopped the function any number of times and resume it when ever you want
// it will provide the yield keyword and next() value() function* is the notation

function* numberGenerator(){
    yield 1;
    yield 2
}
const gen = numberGenerator()
console.log(gen.next()) //{value: 1, done: false}
console.log(gen.next()) //{value: 2, done: false}


// using in a loop

function* greetGenerator(){
    yield "Hello";
    yield "World"
}

for (let ge of greetGenerator()){
    console.log(ge)
}

// Hello
// World


// Factory Functions

// factory functions are similar to the constructor function but instead of using new keyword to create an object 
// functory function creates an object and return it

function factory3(name,age){
    return{
        name,
        age,
        greet(){
            console.log(`Hello , my name is ${name} and Iam ${age} years old `)
        }

    }
}

const fact = factory3("Datta Teja",29);
fact.greet() //Hello , my name is Datta Teja and Iam 29 years old 

const fact2 = factory3("Shiv",30);
fact2.greet()//Hello , my name is Shiv and Iam 30 years old 


function createCounter(){
    let count = 0
    return {
        increment(){
            count++;
            console.log(count)
        },
        decrement(){
            count--;
            console.log(count)
        },
        getCount(){
            console.log(count)
        }
    }
}


const countValue = createCounter()
countValue.increment() //1
countValue.increment() //2
countValue.getCount() //2
countValue.decrement() //1 


















    






















    



