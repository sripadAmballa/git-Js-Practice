
// Asynchronus

// Functions running in parallel with another function is called asynchronus

// Best Examples are 
// SetTimeout() setTimeInterval() promises async/await


/*

setTimeout(myFun2,300);

 function myFun2(){
  console.log("Set Time Out Takes 2 argument a call back function and delay time the call back function is executed once the delay time is completed")
 }
  */

 // SetTimeout will takes 2 arguments a callback function and delay time  the callback function is executed once the delay time has completed and current stack is cleared

 //

 function named(){
  
 
    for (var i=0 ; i<5;i++){
      setTimeout(function(){
          console.log(i)     
      },100)  
    
   }
   
   }
  named() 
  
  
  console.log("A");
  
  setTimeout(() => {
    console.log("B");
  }, 0);
  
  Promise.resolve().then(() => console.log("C"));
  
  console.log("D");
  
  
  var a20  = 1
  
  {
    var a20 = 2
  }
  
  console.log(a20) // 2
  
  
  let a21 = 10
  
  {
    let a21 = 21
   
  }
  
  {
    let a21 = 22
  }
  
  console.log(a21 + " global scope" )// 10 global scope

  // SetInterval 
  // SetInterval takes 2 arguments a callback function and intevel time in ( milli seconds).
  //  callback function is repeatedly invoked at every specific interval. Until it is cleared using clearInterval
  
  let intervalId =setInterval(myFun3,1000)
  
  let counts = 0
  function myFun3(){
    console.log("Running...",++counts);
    if(counts === 5)
        clearInterval(intervalId) 
  } 
  // If we declare the counts inside the myFun3 the setInterval will never ends 
   

  function greetUser(name,callback){
    callback()
    console.log("Hello", name);
   

  }
  function greeting(){
    console.log("Bye")
  }
  greetUser("Sripad",greeting)

  // Bye
  // Hello Sripad

  // Example 2

  setTimeout(function (){
    console.log("This runs after 2 seconds")
  },2000)

  // Example 3
  setTimeout(()=>console.log("Done waiting"),1000)

  // Example 3
  function fetchData(callback){
    console.log("Fetching Data...")

    setTimeout(()=>{
        console.log("Data Fetchecd")
    },2000)
    callback()
  }
   function processData(){
    console.log("Process Data")
   }

   fetchData(processData)

   // Fetching Data...
   //Process Data
   //Data Fetchecd


   // Synchronus 

   // JS code execution

   function myFun4(){
    console.log("Hai to JS  functional execution context")
   }
   myFun4();

   console.log("Bye to Gloabl execution context");


   /* 

   When ever we exceute any Js code a Global Execution context is created  and pushed to the callstack

   for any function a seperate execution context is created  and pushed to the callstack

   next it will execute myFun4()   and print  Hai in console and the function exeuction context is poped out from the callstack
   next it will go to the globla exuction context prtint Bye and there is nothing to execute in call stack 
   now global execution is aslo poped out from call stack

   */

   console.log("Start");
    setTimeout(()=>{
        console.log("Call back function");
    },5000)

    console.log("End")


    // op Start End Call back function 

  // For Asynchronus  ---> web API ---> Call back queue / micro stack queue  ---> event loop ---> call stack 
  // wep API  are broweser super power it contains SetTimers , DOM API --->( Ddocument.getElement), fetch(),

   /* when ever if we run any js code a global execution context is created  in call stack for each and every function a seperate excution context is created  in call stack 

   in above use case
    


   Step-by-Step Execution Explanation:

When JavaScript code is run, a Global Execution Context is created and pushed onto the Call Stack.

console.log("Start") is added to the call stack, executed immediately, prints Start, and is then popped off the stack.

The setTimeout() function is encountered. Since it's an asynchronous Web API, the timer is handled by the browser, not by JavaScript itself.

JavaScript does not wait for the timer to complete — it continues to the next line.

console.log("End") is added to the call stack, executed, prints End, and is popped off the stack.

After 5000 milliseconds (5 seconds), the callback function inside setTimeout is placed in the Callback Queue (also called Task Queue).

The Event Loop continuously monitors the call stack. When the call stack is empty, it pushes the first task from the Callback Queue into the Call Stack.

The callback function is executed, printing Callback function, and then it's removed from the call stack.

 

NOTE : Microtask Queue has higher priority than the Callback Queue.

Before the event loop picks up anything from the Callback Queue, it first clears the Microtask Queue (if not empty).

*/

// PROMISE()
 function eligible(voter){
    console.log(voter)
 }

 const myPromise = new Promise((resolve,reject)=>{

    //let voterAge = Number(prompt("Please enter your age"));
    let voterAge = 25;
    if(voterAge>=18)
        resolve("Eligible for voting")
    else
    reject("Not eliglible for voting")

 }).then((val)=>{
    eligible(val)

 },(err)=>{
eligible(err)
 })


 //entered age is 25  //Eligible for voting
 // entered age is 2  //Not eliglible for voting


 // Promise.then() retuns a promise it takes two argumentsa callback function for success and callback function for failure case
// Promise.catch() retuns a promise it will handle only the reject cases 



// Example 2 


const myPromise1 = new Promise((resolve,reject)=>{
resolve(363)
}).then((val)=>{
console.log("Asynchronus logging value :", val)
})

console.log("Immediate logging")


/* output

Immediate logging
Asynchronus logging value : 363
*/


// Promise.all()

/* Promise.all() method takes array of promises and retuns a promise 
 that resolve when all the promises are resolve 
 reject atleast one of the promise is rejected  */

 // Promise.alsetteled();

 /* Promise.allsetteled() method takes array of promises and returns single  promise 
    That resolves when all promises are setteled  regardeless of whether they are rejected or reolve */

  // Promise.race()
  
  /* promise.race() method retuns a promise that settles  (reolved or rejected) as soon as the first  promise is settles */


  // Promise.any()

  // promise.any() method returns a promise that resolve  as soon as one of the promise is reolved
  
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("Promise 1")
//resolve("value 1")
reject("Promise 1 is bad")
    },300)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 2");
        resolve("value 2")
        // reject("Promise 2 is bad")
    },500)
})

Promise.all([promise1,promise2]).then((val)=>{
    console.log("Every thing is reolved")
    console.log(val)
}).catch((err)=>{
    console.log("One of the promise is rejected")
    console.log(err)
})


/*
 output for All promises are resolved


 Promise 1
 Promise 2
 Everything is resolved
 ["value 1", "value 2"]
 */

 /* output if Promise1 ie rejected 

 in Promise all if alteast one of the promise is reject then Promise.all method is rejected 
    so catch block is executed

    Promise 1
    One of the promise is rejected
    Promise 1 is bad
    Promise 2



    Promise 1
    Promise 1
     One of the promise is rejected
    Promise 2 is bad

    */


    // promise.allsettled() takes an arry of promises and retuen a single promise thet resolve when all promises are settled  regardless of promises are rejectd or reolved


    const promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("Promise 3")
    //resolve("value 3")
    reject("Promise 3 is bad")
        },300)
    })
    
    const promise4 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise 4");
            resolve("value 4")
            // reject("Promise 4 is bad")
        },500)
    })
    
  
    
    
    Promise.allSettled([promise3,promise4]).then((val)=>{
        console.log("All Promises are setteled")
        console.log(val)

    })
    /* 
    Promise 3
    Promise 4
    All Promises are setteled

    [
    {"status": "rejected",
      "reason": "Promise 3 is bad"
    },
    {"status": "fulfilled",
     "value": "value 4"
    }
]
    */


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("Promise 5")
resolve("Promise 5 is win the race ")
//reject("Promise 5 is rejected the race")
    },300)
})

const promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 6");
        //resolve("Promise 6 is win the race")
         reject("Promise 6 is rejected the race")
    },500)
})

Promise.race([promise5,promise6]).then((val)=>{
    console.log("The Promse which is first resolved in a race")
    console.log(val)
}).catch((err)=>{
    console.log("The Promise Which is first rejected in race")
    console.log(err)
})
/* 

takes array of promises and return a promise that is first resolved or first rejected in a race

Promise 5
The Promse which is first resolved in a race
Promise 5 is win the race
Promise 6
*/


const promise7 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("Promise 7")
resolve("Promise 7 is first fulfilled ")
//reject("Promise 7 is rejected in any")
    },700)
})

const promise8 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 8");
        //resolve("Promise 8 is first fulfilled ")
         reject("Promise 8 is rejected in any ")
    },500)
})

Promise.any([promise7,promise8]).then((val)=>{
    console.log("Promise any will retun a single promise that is first resolved")
    console.log(val)
})

/*

Promise any will retun a single promise that is first resolved


Promise 8
Promise 7
Promise any will retun a single promise that is first resolved
Promise 7 is first fulfilled 

*/


//  async await


// async await make promises easier to write

// async return a promise


// Normal function

function hello(){
    
    return "hello"
}
console.log(hello()) //hello

// async function

async  function demo(){
    return "HELLO"
}
console.log(demo()) //Promise {<fulfilled>: 'HELLO'}

demo().then((val)=>{
    console.log(val) //HELLO
}

)


// async and await

// async returns a promise
// await  can be used inside the async function 
// it will pause the execution of function until the promise is resolved
// makes asynchronus code look like synchronus


async function demo1(){
return await Promise.resolve("Hello")
}
demo1().then((val)=>{

    console.log(val) //Hello
})

function resolveAfter2Seconds(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x)
        },2000)
    })

}

const timer = async function(x){
    let a = await resolveAfter2Seconds(20)
    let b =  await resolveAfter2Seconds(30)
    return x + a + b
}

console.log(timer()) // retuns a promise

timer(10).then((val)=>{
    console.log(val) //60
})

// will get the final result after 4 seconds once the varibale a return its value varible b starts

// So this makes an asynchronus code look like synchronus


function demo2(a,b){

    setTimeout(()=>{
        console.log(a," value :",b) //a  value : 10 // b  value : 20
        return b; // // ❌ this return is inside setTimeout — it doesn't return from demo2()
    },2000)
}




const demo3 = async function(){
    let greet1 = await demo2("a",10);
    let greet2 =  await demo2("b",20) ;
    return greet1 +" "+ greet2
}

// async function will return a promise

// await will pause the code until the promise is resolved

// here the greet2 function  will get invoked after we get response of greet1 function

demo3().then(val=>console.log(val)) // undefined undefined


// Here demo2() function is not returning promise a promise , so await dosn't work and that's why you are getting undefined


function demo4(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(a)
        },3000)
    })
}

demo4(100000).then(val=>console.log(val)) // returns promise  its value is 100000

const demo5 = async function(){
    let a = await demo4(100); // her demo4 return a promise that resolves 100
    let b = await demo4(200); // here demo4 returns a promise  that resolves 200

    return a+ b
}

// async fun return a promise

demo5().then(val=>console.log(val)) // will get the final result after  6 seconds = 300 
/*

(async function(){
   
   let p_a =demo4(5000);
   let p_b = demo4(7000);
   return await p_a + await p_b
})().then(val=>console.log(val))// 12000  both p_a and p_b retuns promises resolve in 3 sec  paralley executed

*/


// DIFFERENCE BETWEEN ASYNC AND AWAIT


// NORMAL EXECUTION FLOW

/*
<Doctype ="html">
<html lan= "en">
<header>
<title>Normal flow </title>
</header>
<P></P>
<div>
<h3> </h3>
</div>
<script> </script>
<div> </div>
<p></p>

</body>
</html>

normally html parsing is goes no as soon as it encounted with script the html parsing is stopped the script is fetched from the network then it will executed post script is executed the html parsing is continues

                    script is
html parsing        fetched and exeuted     html parsing continues

<>------------<> /----------------------/ <------------------------/>



// if we include the async keyword in script tag <script async></script>

Html parsing is goes on and paralley script is fetched once the script is fetched html pasing is stopped  script is exuected post that html parsing will be done


<------------------------------> /-----------------/> <>------------------<>
html parsing
            /-----------------/  script is executed    html parsing continues
            scripr is fecthed 
            from network
// async doen not maintain the order of execution 


// defer if we include defer in script tag <script defer> </script>


// Html parsing is goes on and paralley  script is fetched from the network once the html parsing is completed then script is executed


<----------------------------> /----------------/
Html parsing 
            /---------------/   script execution
            script is fetched

defer will maintain the order of execution   

*/

// Fetch()

/* fetch() fetches resources from the network & returns a promise which is fulfilled once the promise is available
 fetch promise rejects only when the network is encounred
 fetch promise does not reject on HTTP error 404 etc., */

 // Example 1 

 const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts',{
    "method":"GET",
    "headers":{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    cache:"default"

 })



 fetchPromise.then((res)=>{
    if(!res.ok){
        throw new Error("Network response was not found")
    }
    return res.json()

 }).then(data=>{
   // console.log("Fetched Data :",data)
 }).catch(err=>{
    console.log("Fetch error :",err)
 })


 // Using async and await


 // Example 1 using async and await  of fetch API call 

 async function makeGetRequest(){
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await req.json();
   // console.log(res);
 }

 makeGetRequest()


 // Example 2 


 async function makeGetRequest1(){
    const req = await fetch('https://jsonplaceholder.typicode.com/posts',{
    "method":"GET",
    "headers":{
        'Accept':"application/json",
        "COntent-Type":"application/json"
    },
    cache:"default"
})

if(!req.ok){
    throw new Error(req.statusText)
}
const res  = await req.json();
const data = res.filter(val=>val.userId===1);
console.log(data)
 }
 makeGetRequest1()


 // POST REQUEST


 async function makePostRequest(){

    const req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        "method":"POST",
        "headers":{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        "body": JSON.stringify({
            "userId": 101,
    "id": 101,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
        })

    })

    if(!req.ok){
        throw new Error(req.statusText)
    }
    const res = await req.json();
    console.log(res)
 }
 //makePostRequest()


 // Here the flow of how canceling the fetch call works


 /* create an AbortController instance 
 that instance has a signal property
 pass the signal as a fetch option for signal
 call the AbortController 
 abort property to cancel all fetches that use the signal */


 // for Canceling the fetch request

 // above code

 const controller = new AbortController();
 const {signal} = controller;

 async function fetchAbort(){
    try{

    const res = await fetch('https://',{
        "method":"GET",
        signal
    })
    const data = await req.json();

 }catch(err){
    if(err.name === 'AbortError'){
        console.log("Fetch was aborted !")
    }else{
        console.log("Fetch error :",err)
    }
 }

}





















