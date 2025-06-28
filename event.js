console.log("HTML Event Practice")

/*
 stopPropagation()
 Prevents further Prapagation of current event in the bubling and capturing

 stopImmediatePropagation()
 Prevent other listeners of current event from being called

 preventDefault()
preventDefault method will stop the current behaviour of an element used for achor tag

 */

const form = document.getElementById('myForm');
function formSave(e){
e.preventDefault() // prevents the page from reloading
const name = document.querySelector('#name').value
const phone = document.getElementById('phone').value
console.log(name, phone)
}

form.addEventListener('submit',formSave)

// stopProgation Example

document.querySelector('#main-container').addEventListener('click',mainContainer,false) // false means event  bubbling event is propagated from child to parent
document.querySelector('#child-container').addEventListener('click',childContainer,false)
document.querySelector('#grand-child-container').addEventListener('click',grandChildContainer,false)


function mainContainer(event){
    this.style.backgroundColor ='yellow'
}

function childContainer(event){
     this.style.backgroundColor ='green'
    
}
function grandChildContainer(event){
 this.style.backgroundColor ='orange';
 event.stopImmediatePropagation();
  
 
  
}


// In bubbling the event is propagated from child to parent

/*
//with out stopPropagation

if user clicks on the grand child the event is propagated from grand child to child to parent
bg is applied to grand child --> to child to ---> parent

//with stopPropagation()
if user clicks on grand child only that block function will get trigger and bg is applied to grand child
*/

// PreventDefault will stop the current behaviour

document.querySelector('#demo1').addEventListener('click',fun1);
document.querySelector('#demo2').addEventListener('click',fun2);


function fun1(e){
this.style.backgroundColor='green'
}
function fun2(e){
    
    this.style.display='flex'
    this.style.justifyContent='center'
    this.style.alignItems='center'
    e.preventDefault() // here we added preventDefault method to anchor tag it will sprevent its behaviours 
}







