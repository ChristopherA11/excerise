// find the Object length
// var student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
// };
// let studentLength = Object.keys(student).length

// subset 
// let animalName = "dog"
// // Expected Output: ["d", "do", "dog", "o", "og", "g"]

// let subset =[]
// for (let i = 0; i < animalName.length; i++) {
//   for (let j = i + 1; j < animalName.length + 1; j++) {
//     subset.push(animalName.slice(i,j));
//   }
// }
// console.log(subset);

// let product = {
//   name: "headphones",
//   price: 100,
//   discount: 0
// };

// if (product.price > 100) { // product price above 100 if condition working otherwise else condition working
//   discont = ((product.price/100) * 10);
//   product.price = (product.price - discont)
// } else {
//   discount = product.discount
//   product.price = (product.price - discount)
// }


// let personDetails = [
//   {product: "HeadPhone",  price: 2220, qty: 5},
//   {product: "TeleVision", price: 1550, qty: 6},
//   {product: "Router",     price: 3200, qty: 4},
//   {product: "Mobile",     price: 5000, qty: 10},
// ];

// let output = []
// for (let i = 0; i < personDetails.length; i++){
//   let first = personDetails[i]
//   if (first.price < 2250) {
//     output.push(first)
//   }
// }

// const student = [
//     {country: "india", meadels: "5"},
//     {country: "china", meadels: "4"},
//     {country: "japan", meadels: "5"},
//     {country: "aus", meadels: "4"},
//     {country: "usa", meadels: "3"},
//     {country: "uk", meadels: "5"},
//     {country: "uae", meadels:"3"}
//     ];
  
// // let output = {5:["india","japan","uk"],
// //              4:["china","aus"],
// //              3: ["usa"]
// //      }

// let output = {}
// for (let i = 0; i < student.length; i++) {
//   let studentCoutntry = student[i].country
//   let studentMeadels = student[i].meadels
//   if (output[studentMeadels]){
//     output[studentMeadels].push(studentCoutntry)
//   }else{
//   output[studentMeadels] = [studentCoutntry]
//   }
// }  
// console.log(output);

// class Person {
//   constructor(name,sec,mark){
//     this.name = name
//     this.sec = sec
//     this.mark = mark
//   }
//   getMark(){
//     return this.highest; 
//   }
//   setHighest(highest){
//     this.highest = highest

//   }
//   final(){
//     return (`${this.name},7th std "${this.sec}" section and total mark = ${this.mark} `)
//   }
// }

// let anotherPereson = new Person("john", "B", 100)
// console.log(anotherPereson.final())
// // console.log();
// anotherPereson.setHighest("score")
// console.log(anotherPereson.getMark());

// let array = [9,9,9]
// let output =[]
// let val = 1;
// function addValue(arr) {
 
//   for (let i = arr.length-1; i >= 0; i--){
//     let result = arr[i] + val
//     output.unshift(result %10)
//     val = Math.floor(result / 10)
//   }
//   if (val > 0){
//     output.unshift(val)
//   }
//   // console.log(output)
// }
// addValue(array)
// console.log(output);


// let array1 = [2,3,3,5,7,11]
// let array2 = [3,3,7,15,31]

// let output = []

// for (let i = 0; i < array1.length; i++){
//   for (let j = 0; j < array2.length; j++){
//     if (array1[i] === array2[j] && !output.includes(array1[i])){
//       output.push(array1[i])
//     }
//   }
// }

// console.log(output);

// let array = [6,3,2,5,7,7]

// let output = []
// for (let i = 0; i < array.length; i++){
//   for (let j = i + 1; j < array.length; j++){
//     if (array[i] > array[j]){
//       let swap = array[i]
//       array[i] = array[j]
//       array[j] = swap
//   }
// }
// }

// console.log(array);


let obj = {
  sec: "B",
  name: "hai",
}

console.log(Object.keys(obj).length)