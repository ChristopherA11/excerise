// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
//   }
// console.log(areEqualCaseInsensitive("hello","hai") ); 


// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"


// string
const myVariabel="mathematics";
console.log(myVariabel.length);
console.log(myVariabel.charAt(2));
console.log(myVariabel.slice(5,8)); // stating value add to finish value not include & end vaue not indicate all value indicate
console.log(myVariabel.split("t")); // use symbol space or ,
console.log(myVariabel.includes("ma")); // just boolean value indicates
console.log(myVariabel.indexOf("m")); // index means values indicates in to the values
console.log(myVariabel.lastIndexOf("th")); // indicate last value index number
console.log(myVariabel.toUpperCase());


// number

let myNumber="41.25";
let myFloat=41.5;
console.log(myNumber); // indicate in string value
console.log(myFloat);
console.log(Number(myNumber)); // use to string to number value converted
console.log(parseInt(myNumber)); // float value not indicate just number indicate
console.log(Number.parseFloat(myNumber));


//  if(myFloat === myNumber){  // === datetypes and values & == values only
    // console.log("my vaue is correct");
//  }else{
    // console.log("incorrect");
//  }

 // math
//  console.log(Math.round(myNumber));
//  console.log(Math.PI);
//  console.log(Math.trunc(Math.PI));
//  console.log(Math.pow(3,4));//3*3*3*3

//  let myName="chris";

//  console.log(myName.charAt(Math.floor(Math.random()*myName.length)));



//  console.log(Number.isNaN("42"));
//  console.log(isNaN("heelo"));
 


//obj = {}

// let obj=new Object(); // obj 
// let object={
//     name:"hello",
//     age:33,
//     address:{
//         city:"coimbatore",
//         state:"tamilNadu",
//     }

// }
// console.log(object.address.city);




// let my=prompt("enter ur name");

// if(my){
//     console.log(my);
// }else{
//     console.log("not enter ur name");
// }



// function

function myCon(mail){
    return (mail.charAt(0).toUpperCase()+mail.slice(1,mail.indexOf("@")))
}
console.log(myCon("hahha@gmail"));
console.log(myCon("venkatesh@gmail"));


//object

const vechile={
    doors:2,
    engine:function(){
        return "sound in heavy";
    }
};

const car= Object.create(vechile);
car.wheel=4;
console.log(car.doors);
console.log(car.engine());

car.engine=()=>{
    return "sound"
}

console.log(car.engine());


const movie={
    actor:"rajini",
    music:"arr",
    director:"nelson",
}
movie.actress="taman"; // add the values
// delete movie.actor; // delete the value this method use

console.log(Object.values(movie));

for (let key in movie){
   console.log(`${movie[key]}:${key}`); 
}

//destucturing
const {music:myFavMusic,director:myFavDi}=movie;
console.log(myFavMusic,myFavDi);  // diffrent name call use:different name

// const {music,director,actor}=movie;
// console.log(music);    // same name used in the main object
// function song({music}){
//     return (music);
// }
//  console.log(song(movie));


//classes

// const users= fetch("https://jsonplaceholder.typicode.com/users")
// console.log(users);

const myPizza={
    size:"medium",
    crust:"original",
    bake:function(){
        return console.log(`baking a ${this.size} ${this.crust} crust pizzaa.`)
    }
}
myPizza.bake();

class Pizza{
    constructor (type,sice,radius){
        this.type=type;
        this.sices=sice;
        this.rad=radius;
        this.size="medium";
        this.crust="original";
    }
    bake(){
        return console.log(`baking a ${this.size} ${this.crust} crust pizzaa.`)
    }
     model(){
        return console.log(`baking a ${this.sices} ${this.type} crust pizzaa ${this.rad}.`)
    }
     }


const anotherPizza= new Pizza();
anotherPizza.bake()

const anothePizza= new Pizza("magraita","small","thin")
anothePizza.model();


const details={
    name:"chris",
    age:24,
    address:function(){
        // return (`${this.name} ${this.age}`)
        return this.name + " " + this.age
        // console.log(this.name);

    }
}
 
document.getElementById("result").innerHTML =  details.address();
console.log(details.name);

