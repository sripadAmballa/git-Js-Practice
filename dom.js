console.log("DOCUMENT OBJECT MODAL (DOM)")

//changing the content of an html element whose id = demo
document.getElementById('demo').innerHTML = "Welcome JS DOM PRACTICE";


// Finding HTML elements

// 1 document.getElementById('demo')--->It will find an element using Id
//2 document.getElementByTagName('p')--->It wil find an element using tagName
// 3 document.getElementByClassName('container')--->It will find an element by using classname


// Changing HTML elements

// 1 element.innerHtml  --->adds new content
//2  element.attribute ---> change the attribute value of an HTML element
//3 element.style.property ---->changes the style of an html element
//4 element.setAttribute(attribute, value) ---> change the attribute value of an HTML element


//Adding and Deleting Elements

//1 Document.createElement(element) --->Create an HTML element
//2 Document.removeChild(element)--->Remove an HTML element
//3 document.appendChild(element)--->Add an Html element
//4 document.replaceChild(new,old)--->replace an HTML element
//5 document.write(text) --->write into the HTML output stream


// Finding HTML elements by id

const ele = document.getElementById('demo1')

document.getElementById('demo2').innerHTML = "\'text is took from above paragraph\'"+" "+ele.innerHTML

// Finding HTML elements by tag name

const ele1 = document.getElementsByTagName('div');
document.getElementById('demo3').innerHTML = ele1[0].innerHTML+ " "+ ele1[1].innerHTML


// changing the value of an attribute
//document.getElementById('demo4').src = "landscape.jpg";

document.getElementById('date-and-time').innerHTML = "Date & Time"+ Date()

// changing the Html Style
document.getElementById('date-and-time').style.color ="green"

// Display Time
function displayTime(){
    let date = new Date()
document.getElementById('time').innerHTML = date.getMonth();

}

// Mouse Over and Mouse Out event

function mouseOver(obj){
    //document.getElementById('mouseOver-mouseOut').innerHTML = "Thank You" // below one is the alternative way
   obj.innerHTML = "Thank You"
}

function mouseOut(){
    document.getElementById('mouseOver-mouseOut').innerHTML = "Mouse Over Me"
}

// MouseDown & MouseUP

function mouseDown(obj){
obj.style.backgroundColor ="yellow"
}

function mouseUp(){
    document.getElementById('mouseOver-mouseOut').style.backgroundColor="grey"
}
// onClick Event

function funClick(){
   
 document.getElementById('demo4').innerHTML="Hello World";
}

 document.getElementById('demo5').addEventListener('click',addEvent)
function addEvent(){
   document.getElementById('demo5').style.fontWeight = "bold"
}


// Difference between onMouseMove onMouseleava onMouseout


// onMouseMove event occures every time the mouse pointer is moved over the element
//onMouseleave occurs when the mouse pointer is moved out of the element
// event occurs when the mouse point is moved out of an element & when its leaves it's child eElememnt


let x = 0;
let y= 0;
let z=0;
function mouseMove(){
    document.getElementById('demo6').innerHTML = x+=1
}

function mouseLeave(){
    document.getElementById('demo7').innerHTML = y+=1
}

function mouseout(){
    document.getElementById('demo8').innerHTML = z+=1
}


//addEventListener ('action',function, boolean);

/* addEvent Listener will take 3 parameters the first parameter is type of action

second is callback function
third is boolean value 
if true ---->event capturing
if false --->event bublimg
*/

 // event bubling  addEventListener('click',function,false)

 /*
 the inner most element is handles firts then the outer
 <div>
<p></p>
 </div>

 event propagation is happen from <p> to the <div> ie., child to parent

 */

 document.getElementById('myp1').addEventListener('click',function(){alert('You Clicked P1')},false)
 document.getElementById('myDiv1').addEventListener('click',function(){alert('You Clicked div1')},false)

 //event capturing  addEventListener('click',function,true)
 /*
 the outer most element is handles first
 <div>
    <p> </p>
    </div>
    the evnet propagation is happens from div to p i.e., parent to child
    */

     document.getElementById('myp2').addEventListener('click',function(){alert('You Clicked P2')},true)
     document.getElementById('myDiv2').addEventListener('click',function(){alert('You Clicked div2')},true)

console.log(document.querySelector('#demo').innerHTML)


const sect = document.querySelector("section")  // it will refer to the section tag

// now I want to add paragraph to the section tag

const para = document.createElement('p') // p tag is cretaed
para.textContent ="We hope you enjoyed the ride" // for the p tag we are adding textcontent
sect.appendChild(para) // p tag is added as achild for the section tag

const text = document.createTextNode('-— the premier source for web development knowledge.') // just linke textcontent it will create the content for the paragraph
//const linkPara = document.querySelector('p') // here we are selecting the p tag  by default it will select the first p tag in the web page
//linkPara.appendChild(text) // now the text is appended to that p tag


// removing 
//sect.removeChild(linkPara) // now p tag has been removed from the section tag


// now we are trying to add the css to the p tag inside the section tag

/*
para.style.color ='green';
para.style.backgroundColor ='lightgrey';
para.style.padding= '10px';
para.style.width ='250px';
para.style.textAlign ='center'
*/

// Now I want to add styling using the setAttribute
// setAttribute is will take 2 parameters 
para.setAttribute('class','highlight')


//querySelector supports 
/*

1) ID selector
document.querySelector('#demo');

2) Class Selector
document.querySelector('.myClass')

3) tag Selector
document.querySelector('p')

4) attribute selector
document.querySelector('[name="userName"]')

5) combinators (child)
document.querySelector('ul > li')

descendant
document.querySelector('ul li')


NOTE KEY POINTS

querySelector returns the first elment that matches
use querySelctorAll() to get a nodelist of all matches


*/

// Creating a form Using DOM

const br = document.createElement('br') // break line element is created
const form = document.createElement('form') // form Element is created
const caption = document.createElement('caption')// caption element is created
caption.textContent ="Registration" // 



//  creating input type as text of fullname
const nameLabel = document.createElement('label')
// adding lable value of  fullName
nameLabel.textContent ="Full Name :";
// now adding attrributes to tha label
nameLabel.setAttribute('for','name')

const nameType = document.createElement('input')
// adding attributes to input
nameType.setAttribute('type', 'text')
nameType.setAttribute('id','name');
nameType.setAttribute('placeholder','Please Enter Name')


// creating a  input type as dob

const dobLabel = document.createElement('label');
dobLabel.setAttribute('for','dob')
dobLabel.textContent = "DOB :"


const dobType = document.createElement('input');
dobType.setAttribute('type','date');
dobType.setAttribute('id','dob');
dobType.setAttribute('placeholder','Date of birth')

// Creating input type as email
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email :'
emailLabel.setAttribute('for', 'email')

const emailType = document.createElement('input');
emailType.setAttribute('type','email');
emailType.setAttribute('id','email')
emailType.setAttribute('placeholder','Email')


// Creating input type as gender

const maleLabel = document.createElement('label');
maleLabel.textContent ='Male :'
maleLabel.setAttribute('for','mail');

const maleType = document.createElement('input');
maleType.setAttribute('id','male');
maleType.setAttribute('type','radio')
maleType.setAttribute('name','gender')


const femaleLabel = document.createElement('label')
femaleLabel.setAttribute('for','female')
femaleLabel.textContent ='Female :'


const femaleType = document.createElement('input')
femaleType.setAttribute('type','radio');
femaleType.setAttribute('id','female')
femaleType.setAttribute('name','gender')

// Creating an element by submit

const submitType = document.createElement('input');
submitType.setAttribute('type','submit')
submitType.setAttribute('value','Submit')


// Now Appending 

// append() --->is more flexible accepts one or more nodes  returns nothing (undefined)
// appendChild()--->accepts only one node returns the appended node

// now Appending cation
form.append(caption);

// inserting a break line
form.append(br.cloneNode())

// appending name
form.append(nameLabel,nameType)

// inserting a break line
form.append(br.cloneNode())


// inserting date of birth
form.append(dobLabel,dobType)

// inserting a break line
form.append(br.cloneNode())

// inserting email
form.append(emailLabel,emailType)

// inserting a break line
form.append(br.cloneNode())

// inserting gender
form.append(maleLabel,maleType,femaleLabel,femaleType);

// inserting a break line
form.append(br.cloneNode())

// inserting submit

form.append(submitType)

// Since Append methos return undefined we are adding form to the body

document.getElementsByTagName('body')[0].appendChild(form)
document.getElementsByTagName('body')[0].style.backgroundColor ='lightgrey';
document.getElementsByTagName('form')[1].style.textAlign ='center'
document.getElementsByTagName('caption')[2].style.fontSize ='25px'























