// let root = [1,null,2,3]
// // Output: [1,2,3]

// let output= [];
// for (let i = 0; i < root.length;i++){
//     if(root[i] == null){
//       delete root[null]
//     }else {
//         output.push(root[i])
//     }
// }


// var paragraph= "the the the the the thleatheth atha atha atha bath bath"
// let starting = 0;
// let ending = 0;
// let between = 0;
// let searchTerm = "th"
// let splitThePara = paragraph.split(" ")

// for(let i = 0; i < splitThePara.length; i++) {
//   let word = splitThePara[i]
//   if (word.startsWith(searchTerm)){
//     word = word.slice(searchTerm.length,word.length)
//     starting++;
//   } 
//   if (word.endsWith(searchTerm)) {
//     word = word.slice(searchTerm.length,word.length-2)
//     ending++;
//   }
  
//   if (word.includes(searchTerm)){
//     between++;
//   }
       
// }



// let para = "wicket the falls";
// let vowels = ["a", "e", "i", "o", "u"]
// let count = 0;
// let splitThePara = para.split("");
// function countTheSearchTermVal(paragra,splitVow) {
//  for (let i = 0; i < paragra.length; i++) {
//   let findWord = paragra[i]
//   for (let j = 0; j < vowels.length; j++){
//    let findVow = vowels[j]
//     if (findWord == findVow){
//       count++
//     }
//   }
//  }
// }
// countTheSearchTermVal(splitThePara,vowels);


// let numbers = 7351;
// // let output = 1537;
// let convert = numbers.toString()
// let reverss = "";
// function reverses(conv) {
//   for ( let i = conv.length-1; i > 0; i--){
//     reverss +=conv[i]
// }
//  return parseInt(reverss)
// }
// reverses(convert)
// let reversee = numbers.toString().split("").reverse().join("")



// let number = 7351;
// // output = 1537 only use normal math function not use inbuild function in js
// let numbers = 0;
// function reverseValue(numbers,numberss) {
// while ( numbers > 0) {
//   let lastValue = numbers %10;
//   numberss = numberss * 10 + lastValue;
//   numbers = Math.floor(numbers / 10)
// }
// return numberss;
// }
// reverseValue(number,numbers)


// let letters = "abiba"; 
// let reverss = "";
// function reverses(conv) {
//   for ( let i = conv.length-1; i >= 0; i--){
//     reverss +=conv[i]
//     }
//     if (reverss !== letter){
//       return false;
// }
//  return true;
// }
// reverses(letter)

// let result = letter.split("").reverse().join("")

// function palindrome(letter) {
// let j = letter.length-1
// for (let i = 0; i < j; i++){
//    let first = letter[i];
//    let second = letter[j - i]
//    if (first == second){
//     return true;
//    }
// }
// return false;
// }
// palindrome(letters)

// Write a JavaScript program that accepts a string as input and swaps the case of each character. 

// let input = 'The Quick Brown Fox' 
// // output = 'tHE qUICK bROWN fOX'

// let result = ""
// for (let i = 0; i < input.length; i++){
//  let initiate = input[i]
//     if(initiate === initiate.toUpperCase()){
//             result += initiate.toLowerCase()
//     }else if (initiate === initiate.toLowerCase()){
//             result = result + initiate.toUpperCase()
//       }
//   } 

// let para = "falls";
// // output = {f: 1, a:1, l:2,s:1} 

// let output = {};
// let count = 0
// let parass = para.split("");
// function parasLength(paras) {
// for (let i = 0; i < paras.length; i++) {
//   let space = paras[i]
//   if (output[space]) {
//    output [space]++
//   }else {
//     output[space] = 1
//   }
// }
//  return output;
// }
// parasLength(parass)


// let str1 = "aabc"
// let str2 = "ab"
// // output = {"ac"} 
// let output = {};
// for (let i = 0; i < str2.length; i++){
//   let second = str2[i]
//   for (let j = 0; j < str1.length; j++) {
//     let first = str1[j]
//   if (first === second){
//     str1 = str1.slice(0,j) + str1.slice(j+1)
//     output[first] = str1
//   }
//   }
// }

// let str1 = "aabc"
// let str2 = "ab"

// let output = {};
// for (let i = 0; i < str2.length; i++) {
//    let firstStr = str2[i]
//   for (let j = 0; j < str1.length; j++){
//      let secondStr = str1[j]
//     if (firstStr === secondStr) {
//       let str = ""
//       for (let t = 0; t < str1.length;t++){
//         if (j !== t){
//           str +=str1[t]
//         }
//       }
//        str1 = str
//        output [firstStr] = str1
//     }
//   }
// }
// console.log(output);

// const student = [
// 	{id: 1, mark : 50, result: "pass"},
// 	{id: 2, mark : 30, result: "fail"},
// 	{id: 3, mark : 60, result: "pass"},
// 	{id: 4, mark : 20, result: "fail"},
// 	{id: 5, mark : 80, result: "pass"},
// 	];

// let output = {}
// student.forEach((stu) =>{
// 	let key = stu.result === "pass"
// 	if (output[key]){
// 		output[key].push(stu)
// 	}else {
// 		output[key] = [stu]
// 	}
// });
// console.log(output);

// const student = [
// 	{id: 1, mark : 50, sec: "a", result: "pass"},
// 	{id: 2, mark : 30, sec: "b", result: "fail"},
// 	{id: 3, mark : 60, sec: "a", result: "pass"},
// 	{id: 4, mark : 50, sec: "a", result: "fail"},
// 	{id: 5, mark : 30, sec: "a", result: "pass"},
// 	];

// let output = [];
// student.forEach((stu) => {
// 	let addVal = stu.mark + "-" + stu.sec
// 	const findTheVal = output.find((item) => {
// 		return item.addVal === addVal
// 	});
// 	if (findTheVal){
// 		findTheVal.values.push(stu)
// 	}else {
//    output.push({addVal, values:[stu]})
// 	}
// });

// let student = {
//     id: 1,
//     rollno: 45,
//     hobby:["travel", "reading"]
// }
// for (let key in student) {
//   console.log(student[key]+":"+key)
// }

