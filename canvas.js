//HTML canvas element is used to draw graphics on the fly using java script
//canvas has several method for drawing paths,boxes,circle,text and adding images



// canvas element is used to draw graphics on a web page
/*
<canvas id ="myCanvas" width="200" height="200"></canvas>

the id attribute is required (so it can be preferred to by js)
width and height defines the size of the canvas
NOTE : the default size of the canvas is 300px of width 150 px of height


*/


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x,y,radius){
ctx.fillStyle = 'lightgreen' 
ctx.fillRect(0,0,canvas.width,canvas.height)//fillRect(x, y, width, height) — draws a filled rectangle // creates a rectangle of width = 200 , height of 200 x-coordinate = 0 y-coordinate = 0
ctx.beginPath()// creates new path
ctx.fillStyle ="black" //fill color

//arc(x, y, radius, startAngle, endAngle, anticlockwise) — draws an arc
ctx.arc(x,y,radius,0,2 * Math.PI)
ctx.fill() //— fills the current path with the fill style
  
}
let x= 50;
let y= 50
const radius= 30

drawCircle(x,y,radius)


const button = document.querySelector('button');
button.textContent ="Change Body Color";

function random(number){
    return Math.floor(Math.random() *(number+1))
}
function changeBackground(){
    const rndcol = `rgb(${random(255)} ${random(255)} ${random(255)})`
    document.body.style.backgroundColor = rndcol
}

button.addEventListener('click',changeBackground)


// remove addEvent Listener

//button.removeEventListener('click',changeBackground)  will remove the click functionality





    
