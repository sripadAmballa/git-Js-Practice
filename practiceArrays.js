console.log("MDM DOCUMENTATION PRACTICE ARRAYS")


const myArray = ["Apple","Banana","Mango"]
console.log(myArray[0]="Kiwi") //Kiwi
console.log(myArray) // ['Kiwi', 'Banana', 'Mango']


const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]); //2

// finding the index of items in an array
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Falcon")) //1
console.log(birds.indexOf("Rabbit")) //-1

//adding items into an array
const cities =["Manchester", "Liverpool"];
cities.push("cardiff");
console.log(cities) //['Manchester', 'Liverpool', 'cardiff']

cities.push("Bandford","Brighton");
console.log(cities) //['Manchester', 'Liverpool', 'cardiff', 'Bandford', 'Brighton']

const newLength = cities.push("Bristol");
console.log(newLength)//6

// unshift
cities.unshift("Edinburgh");
console.log(cities) // ['Edinburgh', 'Manchester', 'Liverpool', 'cardiff', 'Bandford', 'Brighton', 'Bristol']

//pop()
cities.pop();
console.log(cities)//['Edinburgh', 'Manchester', 'Liverpool', 'cardiff', 'Bandford', 'Brighton']

const removeCity = cities.pop();
console.log(removeCity) //Brighton

//shift
cities.shift();
console.log(cities) //['Manchester', 'Liverpool', 'cardiff', 'Bandford']

const index = cities.indexOf('Liverpool')
if(index !== -1){
    cities.splice(index,1)
}
console.log(cities)//['Manchester', 'cardiff', 'Bandford']


// for of

const birdList = ["Parrot","Falcon","owl"];
for (let bird of birdList){
    console.log(bird)//Parrot Falcon owl
}

// map

const numbers  = [5,2,7,6];
const doubled = numbers.map(no=>no*2)
console.log(doubled) // [10, 4, 14, 12]

//filter

//['Manchester', 'cardiff', 'Bandford']
function isLong(city){
    return city.length>8
}
const longer = cities.filter(isLong)
console.log(longer) //['Manchester']


// converting string to array

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const dataSplit = data.split(',')
console.log(dataSplit) //['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']
console.log(dataSplit.join(',')) //Manchester,London,Liverpool,Birmingham,Leeds,Carlisle


//toString()
const dogName = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogName.toString()) //Rocket,Flash,Bella,Slugger












