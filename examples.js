//   const number = [0,4,0,2,5,4,6,7,8]; 
//   // output = [ 4,2,5,6,7,8,0,0]

// const output=[]; 
// for (let i = 0; i < number.length; i++){
//   if (number[i] !== 0){
//     output.push(number[i]);
//   }
// }
// while(output.length !== number.length){
//   output.push(0)
// }
//   console.log(output);


// let value = [1,1,2,5,4,2];
//  // output = [1,2,5,4]
//  let output =[];
// for (let i = 0; i < value.length;i++) {
//   let result = value[i];
// 	if (!output.includes(result)) {
//         output.push(result);
// 	}
// }

//  let nums1 = [1,2,3,0,0,0]
//  let nums2 = [2,5,6]
// // output = [1,2,2,3,5,6]
// let output = [];
// let results = [];
// // two array merge 
// for (let i = 0; i < nums1.length; i++) {
//   output.push(nums1[i])
// }
//   for (let j = 0; j < nums2.length; j++) { 
//    output.push(nums2[j])
//   }
//   output = output.filter(value => value !== 0);
// //  asscending order only use for loop
// for (let i = 0; i < output.length; i++) {
//   for (let j = i + 1; j < output.length; j++) {
//     if (output[i] > output[j]) {
//       let swapVal = output[i];
//       output[i] = output[j];
//       output[j] = swapVal;
//     }
//   }
// }
 
// function thirdMax(arr) {
//   let firstMax = -Infinity;
//   let secondMax = -Infinity;
//   let thirdMax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//       thirdMax = secondMax;
//       secondMax = firstMax;
//       firstMax = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//       thirdMax = secondMax;
//       secondMax = arr[i];
//     } else if (arr[i] > thirdMax && arr[i] !== firstMax && arr[i] !== secondMax) {
//       thirdMax = arr[i];
//     }
//   }
//   return thirdMax !== -Infinity ? thirdMax : firstMax;
// }

// const array = [3, 1, 5, 7, 6, 2];
// const thirdMaximum = thirdMax(array);
// console.log("The third maximum value is:", thirdMaximum);


// let head = [1,2,6,3,4,5,6], val = 6
// // Output=[1,2,3,4,5]
// let output = [];
// for (let i = 0; i < head.length; i++) {
//   if (head[i] !== 6) {
//     output.push(head[i])
//   }
// }


// let prefix = ["flower","flow","flight"];
// let output = [];
// let splitThePrefix = prefix.toString().split("");
// for (let i = 0; i < splitThePrefix.length; i++) {
//   for (let j = i + 1; j < splitThePrefix.length; j++) {
//     if (splitThePrefix[i] === splitThePrefix[j]){
//       output.push((splitThePrefix[i]))
//       output.join("")
//     }
//   }
// }


// let value = [1, 1, 2, 5, 4, 2];
//  // output = [5,4]
// let output = [];
// for (let i = 0; i < value.length; i++) {
//   let result = value[i];
//   if (value.indexOf(result) === value.lastIndexOf(result)) {
//     output.push(result);
//   }
// }
// console.log(output);


// function incrementDigits(digits) {
//     const res = [];
//     let carry = 1; 
//     for (let i = digits.length - 1; i >= 0; i--) {
//       const sum = digits[i] + carry;
//       res.unshift(sum % 10); 
//       carry = Math.floor(sum / 10);
//     }
//     if (carry > 0) {
//       res.unshift(carry); 
//     }
//     return res;
//   }
//   const digit = [1,2,8];
//   const res = incrementDigits(digit);
//   console.log(res); 

// let nums1 = [1,2,2,1]
// let nums2 = [2,2]
// // Output: [1,2]
// let output=[];

// for (let i = 0; i < nums1.length; i++) {
//       let nums = nums1[i];
//       if(!output.includes(nums)) {
//         output.push(nums)
//       }
// }    
// for (let j = 0; j < nums2.length; j++) {
//  let nums = nums2[j];
//  if (!output.includes(nums)){
//     output.push(nums)
//  } 
// }

// // Array of output
// let numbers = [1,2,3,4]
// // Output = [1,3,6,10] 
//  let output = [];
// let sum = 0;
//  for (let i = 0; i < numbers.length; i++) {
//       sum +=numbers[i]
//         output.push(sum)
//     }

// // object output
// const val = [2,4,8,7]
// // output = {2,6,14,21}

// let output ={}
// let sum = 0;
// for (let i = 0; i < val.length;i++) {
//   sum +=val[i]
// 	output[i] = sum
// }
      
    
//  let array = [0,4,5,0,8,7,6,0];
//  let array2 = [5,4,2,0,6,8,0];
// // //  output = [2,4,5,6,7,8]

// let mergeArray = [...array,...array2];
// for (let i = 0;i < mergeArray.length; i++) {
//     let result = mergeArray[i];
//     if (!output.includes(result)) {
//       output.push(result)
//     }
// }

// unique value in two array
// let nums1 = [4,9,5]
// let nums2 = [9,4,9,8,4]
// // output = [2]
// let output = [];

// for (let i = 0; i < nums1.length; i++) {
//   for (let j = 0; j < nums2.length;j++){
//     if (nums1[i] === nums2[j] && !output.includes(nums1[i])){
//       output.push(nums1[i]);    
//     }
//   }
// }


// let nums = [3,2,1]
// // Output = 1
// let output = [];
// let results = nums.length;
// for (let i = 0; i < nums.length;i++) {
//   if( i >= results){
//     output.push(nums[i])
//   }
// }


// let nums = [0,1,0,3,12]
// // Output= [1,3,12,0,0]

// let val = 0;
// let output = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] !== val) {
//     output.push(nums[i])
//   }
// }
// for (let i = output.length; i < nums.length;i++) {
//   output.push(val)
// }

// merge two sorted list
// let list1 = [1,2,4]
// let list2 = [1,3,4]
// // Output = [1,1,2,3,4,4];

// let result = [...list1,...list2];

// for (let i = 0; i < result.length; i++) {
//   for (let j = i + 1; j < result.length; j++){
//     if (result[i] > result[j]) {
//       let swap = result[i];
//       result[i] = result[j];
//       result[j] = swap
//     }
//   }
// }

// let alpha = ["h","e","l","l","o"];
// // output = ["o","l","l","e","h"];

// // let result = alpha.reverse();

// let result = [];
// for (let i = alpha.length; i >= 0;i--){
//     result.push(alpha[i])
// }


// let s = "abcd"
// let t = "abcde"
// // Output = "e"

// // let output = [];
// for (let i = 0; i < s.length; i++) {
//     let nums = s[i];
//    if (!output.includes(nums)){
//     output.push(nums)
//    }    
//     }
// for(let j = 0; j < t.length; j++) {
//     let nums = t[i];
//     if(!output.includes(nums)) {
//         output.push(nums)
//     }
// }

// let nums = [1, 2, 2];
// let output = []

// for (let i = 0; i < nums.length; i++) {
//   let result = true;
//   for (let j = 0; j < nums.length; j++) {
//     if (i !== j && nums[i] === nums[j]) {
//       result = false;
//     }
//   }
//   if (result) {
//     output.push(nums[i]);
//   }
// }

// console.log(output);


// let list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// // output = ["shogan"]
// let output = [];
// let val = Infinity;

// for (let i = 0; i < list1.length; i++) {
//   for (let j = 0; j < list2.length; j++){
//     if(list1[i] === list2[j] ){
//  const addVal = i + j;
//   if (addVal < val) {
//     output.length = 0;    
//     val = addVal
//  }    
//  if (val === addVal){
//       output.push(list1[i])
//     }
//   }
// }
// }


// let n = 16;
// // output = true;

// function funName(nu) {
//   while( nu > 0) {
//     if (nu%4 !== 0) {
//       return false;
//     }
//     nu /=4
//   }
//   return nu ===1
// }
// funName(n)

