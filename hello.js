// console.log(typeof ("heelo"));
// console.log("hello world");
// console.log(typeof(33));

// srting 
let myVariabel="mathematics";

//string property length
// console.log(myVariabel.length);

// string methods
// console.log(myVariabel.charAt(2));
console.log("hello world".indexOf("wo"));
// console.log(myVariabel.indexOf("th"));
// console.log(myVariabel.slice(5,8));
// console.log(myVariabel.toUpperCase());
// console.log(myVariabel.includes("ma"));
// console.log("myVariabel of".split(" "));
//numbres
const myNumber="16.52";
const myFloat=15.52;
// console.log(myFloat);
// console.log(myNumber);
// console.log(myFloat == myNumber);
// console.log(parseInt(myNumber));

//number methods
// console.log(Number.isInteger(8));
console.log(parseFloat(myNumber));
console.log(parseInt(myFloat));

// console.log(Number.isNaN("du"));
// console.log(isNaN("kho"));

//math properties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));// round the value use in trunc
// console.log(Math.round(4.3));// .5 and above mention the vslue nex value add
// console.log(Math.ceil(4.5));//. any value next value add 
// console.log(Math.floor(4.1));// . any value no change the value
// console.log(Math.pow(3,4)); //3*3*3*3 (multiple value in 3 and howmany time multiple in the value in 4)
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);//1-10,+0 use 0-9

// let variabelName="chris";

// console.log(variabelName.charAt((Math.floor(Math.random()*variabelName.length))));

//if-else condition Statement
let bannedCustomer=false;
let viewer="js fullcourse video updated";
let reply;
let finance=false;

if(bannedCustomer){
    reply=`yes`
}else if( viewer && finance){
    reply=`enjoy ${viewer} and content ${finance}`
}
else if( viewer){
    reply=`enjoy ${viewer} and`
}else{
    reply="sorry"
}
console.log(reply);


// let testScore=88;
// let mark;
// let collegeStudent= true;
// if (testScore >= 90){
//     mark="a-grade";
// }else if (testScore >= 100){
//     mark="b-grade";
// }else{
//     if(collegeStudent){  
//         mark="pass";
//     }else{
//         mark="college"
//     }
// }
// console.log("grade:",mark);


//switch Statement

// switch (Math.floor(Math.random()*4)){ // expresion or values    
//     case "a":
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);    
//         break;
//      default:
//         console.log("No match");   
// }


// let player ="rock";
// let computer="val";

//  switch(computer){
//     case (player):
//         console.log("die");
//         break;
//     case ("val"):
//         if (computer === "val") {
//             console.log("player win");
//         } else{
//             console.log("plat");
//         }
//         break;
//     default:
//         console.log("tiiie");    
//  }


//ternary operation

const name= "chris"

let result= name  ? name: "adult";
console.log(result);



let testScore =90;// chain method

// let results= testScore > 95 ? "a-grade": testScore > 88 ? "b-grade" : testScore > 70 ? "fail": "clg";
// console.log(results);

// let my = prompt("enter your name");

// console.log(my ?? "hello");


// if (my){
//     console.log(my ?? "hello");
// }
// else{
//     console.log("val");
// }


// let  testName= "hello";
// let computer="hello";

// let variabel= testName === computer ? "tie" : testName ==="hai" && computer ==="hello" ? "computerWin" : testName === "chris" && computer === "hello" ? "playerWin":"playerWin";
// console.log(variabel);


//while loop
// let i=0;
// while(i<=50){
//     console.log(i);
//     i++;
// }


//for loop

// for(let i=0; i<= 50;i=i+1){
//     console.log("#",i);
// }


// let initial="chris";
// for (let i=0; i <= initial.length;i++){
//     for(let j=0;j<=initial.length;i++){
//         console.log(i,j);
    // }
// }

//function statement
function addTwoValue(num1,num2){
    if(num2===undefined){
        return num1+6;
       
    }
   return num1+num2
}
console.log(addTwoValue(7));
console.log(addTwoValue(8,15));



function lowerCaseValue(email){  // different way of the function use arrow function => and variabel let variabelName 
    return (email.charAt(0).toUpperCase()+ email.slice(1));

}

console.log(lowerCaseValue("venugopal@gmail.con"));

//scope let,var,const

let x=1;
 x=5;
console.log(x);

// array

const newArray=["hai","hello",false];
// newArray[0]="hai";
// newArray[1]=54;
// newArray[2]=true;
// newArray[3]="every one";

// let consVal=newArray.reverse()
// let joinUse=newArray.join();
// console.log(joinUse);

// console.log(consVal);
let newwArray=newArray.splice();
console.log(newwArray);
 let array=["hello",52,"false"]
//  console.log(newArray.concat(array));// old version
// myArray=[...newArray,...array]; // new version and spread operation name
// console.log(myArray);

const earnMoneyA=["frontend","backend"];
const earnMoneyB=["AI","BlockChain"];
// const growMoneyA =["stacks","realEstate"];
// const growMoneyB=["option","features"];
// const giveMoney=["education"];

// console.log(earnMoneyA[1],growMoneyB[1]);

const earnMoney=[...earnMoneyA,...earnMoneyB];
// const growMoney=[growMoneyA,growMoneyB];

console.log(earnMoney[0]);



// object {} // key (or) property:name 

const newObj ={
    rollNum:10,
    result:true,
    name:"heaven",
   content:{
    nextLevel:"yes accepted",
    grow:"earn"
   } ,
   subDivision:["grow","money",55],
   action:function(){
    return `hello everyone learn in ${this.content.grow}`;
   }

}

console.log(newObj.rollNum);
console.log(newObj.subDivision[0]);
console.log(newObj.content);
console.log(newObj.action());


const cars={
    doors:2,
    engine:function(){
        return "sound";
    }
}

cars.wheel=4; // add value in . method
console.log(cars.wheel);

const vechile = Object.create(cars);

vechile.engine=function(){return "silent"};

console.log(vechile.engine());


// for in loop

const movie={
    movieName:"jailer",
    actor:"rajini",
    music:"ani",
    Producer:"sun",
}

movie.dance="johny"; // add value 
movie.actress="tammanah"
delete movie.actor; // delete values

for (let key in movie){
    console.log(`${key}:${movie[key]}`);
}


console.log(movie.hasOwnProperty("actress")); // check the value include or not include true and no value false


//destucture in same object

const {music, producer} = movie; // same key used in the destructure and object variabel call
// console.log(music);


const drama=({music})=>{ // same music director mention used {} differnt name use  not use {} and change parameter
    return music;
}

console.log(drama(movie));

//classes

const newVal={
    size:"medium",
    price:200,
    hello: function(){
        return `this size is ${this.size} ,and the offer friday price is ${this.price}`
    }

}

newVal.hello();


class pizza {
    constructor(type,prize,slice){
        this.size=type;
        this.price=prize;
        this.slice=slice;
        this.topping="olive";
    }
    getTopping(){
        return this.topping;
    }
    setTopping(toppingPizza) {
        this.topping=toppingPizza
    }
    
    bake(){
        return console.log(`baking size is ${this.size}, and price is ${this.price} and ${this.slice} enjoy ${this.topping}`);
    }

}

const anotherPizza=new pizza("combo",500,"thin");
anotherPizza.bake();


anotherPizza.setTopping("jass");
console.log(anotherPizza.getTopping());
anotherPizza.bake();



//dom

 const view11=document.getElementById("views")
 console.log(view11);

//  const view2 =document.querySelector("#view")
//  console.log(view2);

// view1.style.display="flex";


const views=document.getElementsByClassName("view3")
console.log(views);


// const viewers=view11.querySelectorAll("div:nth-of-type(2n)");// even number 2 natural number
// console.log(viewers);
 
// viewers[1].style.color="blue";// use css changes

// for(let i=0; i< viewers.length; i++){ 
//     viewers[i].style.color ="yellow";
// }


// const navText= document.querySelector("nav h2");// content changed
// console.log(navText);

// navText.textContent="woow";

// console.log(viewers[0].parentElement);
// console.log(viewers[0].parentElement.children);
// console.log(viewers[0].parentElement.childNodes); // enter the value text and enter all value count
// console.log(viewers[0].parentElement.hasChildNodes()); // child value true or false indicate
// console.log(viewers[0].parentElement.lastChild);


// const newDiv=document.createElement("div");
// newDiv.textContent="hi";
// newDiv.style.width="200px";
// newDiv.style.color="black";
// console.log(newDiv);


// //event 


// const vieww= document.querySelector("#view2");
// const div=vieww.querySelector("div");
// const h2=vieww.querySelector("h2");

// console.log(vieww);
// console.log(div);
// console.log(h2);

// //syntax

// //.addEventListener (event,function,useCapture)

// const addSomething= ()=>{
//     alert("hello");
// }

// h2.addEventListener("click",addSomething); //removeEventListener use to remove the function and addEventListener use to add the function


// h2.addEventListener("click", (event)=>{ // not use remove function
//  console.log(event.target);
//  event.target.textContent="subscribe";
// });


  

//asynchronous js

console.log("first");
console.log("second");
console.log("third");




console.log("first");
setTimeout(()=> console.log("second"),5000);
console.log("third");




