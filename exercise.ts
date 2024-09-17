// 1.
// Write a function to get the lowest, highest and average value in the array (with and without sort function).

import { isNoSubstitutionTemplateLiteral } from "typescript";

// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
function lowHighAverage(arr:number []){
    let max = 0;
    let total = 0;
    let min = arr[0];
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
        total += arr[i];
    }

    let average =  total / arr.length;
    const result = `Min is :${min}, Max is :${max}, Average is :${average}, `
    return result;
}
console.log(lowHighAverage([1,5,2,6,4]));


// 2.
// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function arrayToString(arr:string[]){
    const a = arr.length-1;
    arr.splice(a, 0, 'and');
    const myString=arr.toString();    
    const result = myString.replace("and,", " and ");
    return result;
}
console.log(arrayToString(["apple", "banana", "cherry", "date"]));


// 3.
// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function lowNumber(arr:number []){
    arr.sort();
    console.log(arr.sort());
    let min = arr[1];
    const result = `Second Minimum number is :${min} `
    return result;
}
console.log(lowNumber([1,5,2,6,4]));


// 4.
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function resultTwoArray(arr3:number[], arr4:number[]){
    let results = [];

    for (var i=0; i < arr3.length; i++) {
    results.push(arr3[i] + arr4[i])
    }
    return results;
}
console.log(resultTwoArray([1,2,3],[3,2,1]));


// 5.
// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
function addElement(arr:number[], newEle:number){
    if(arr.includes(newEle)){
        return arr;
    }
    else{
        arr.push(newEle);
    }
    return arr;     
}
console.log(addElement([1,2,3,6],6));


// 6.
// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumNumber(arr:any[]){
    let num:number = 0;
    for(let i = 0; i <= arr.length; i++){
        if(typeof arr[i] == 'number'){
            num = num + arr[i];
        }else{
            
        }
    }
    console.log(num);
    return num;
}
console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]));


// 7.
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 
// Example : 
//               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8                                                                                                                                                  
//               The function will return [5, 10, 24, 3, 6]
function decreaseArray(arr:number[], erase:number){
    const result = arr.length-erase;
    arr.splice(erase, result, );
    return arr;
}
console.log(decreaseArray([1,2,3,4,5,6],2));


// 8.
// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]      
function joinArray(arr1:number[], arr2:number[]){
    const arr3 = arr1.concat(arr2)
    return arr3;
}
console.log(joinArray([1,2,3],[4,5,6]));


// 9.
// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]     
function findDuplicate(array:number[]){
    const uniqueElements = new Set();
    const duplicates:number[] = [];
    
    array.forEach(item => {
      if (uniqueElements.has(item)) {
        duplicates.push(item);
      } else {
        uniqueElements.add(item);
      }
    });    

    return duplicates;
}
console.log(findDuplicate([1, 2, 3, 2, 4, 5, 4, 5]));


// 10.
// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]      
function findDifferent(arr1:number[], arr2:number[]) {
    const difference = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            difference.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            difference.push(arr2[i]);
        }
    }

    return difference;
}
console.log(findDifferent([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));


// 11.
// Based on the array below write a function that will return primitive data types only.                                             
// let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]
function primitiveType(arr:any[]){
    let num:any[]=[];
    for(let i = 0; i <= arr.length; i++){
        if(typeof arr[i] === 'number'){
            num.push(arr[i]);
            break;
        }
    }
    for(let i = 0; i <= arr.length; i++){
        if(typeof arr[i] === 'undefined'){
            num.push(arr[i]);
            break;
        }
    }
    for(let i = 0; i <= arr.length; i++){
        if(typeof arr[i] === 'string'){
            num.push(arr[i]);
            break;
        }
    }
    return num;
}
console.log(primitiveType([1, [], undefined, {}, "string", {}, []]));


// 12.
// Write a function from the below array of number that will return sum of duplicate values.                                    
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40
function findSumDuplicate(arr1:number[]) {
    let duplicate:number[] = [];
    let total = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] === arr1[j]) {
                // Check if the found duplicate is already in the duplicates Array
                console.log(arr1[i]);
                total = total + arr1[i];
                if (!duplicate.includes(arr1[i])) {
                    duplicate.push(arr1[i]);
                    break;
                }
            }
        }
    }
    console.log(total);
    console.log(duplicate);
    return total;
}
console.log(findSumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));


// 13.
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
function rockGame (player:string){
    const game = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 2) + 0;
    let result:string = "";
    let com:string = "";
    

    console.log(idx);
    if(player === "rock" && idx === 0){
        com = game[idx];
        result = "tie";
    }else if(player === "rock" && idx === 1){
        com = game[idx];
        result = "You Lose";
    }else if(player === "rock" && idx === 2){
        com = game[idx];
        result = "You Win";
    }
    
    if(player === "paper" && idx === 0){
        com = game[idx];
        result = "You Win";
    }else if(player === "paper" && idx === 1){
        com = game[idx];
        result = "tie";
    }else if(player === "paper" && idx === 2){
        com = game[idx];
        result = "You Lose";
    }
    
    if(player === "scissors" && idx === 0){
        com = game[idx];
        result = "You Lose";
    }else if(player === "scissors" && idx === 1){
        com = game[idx];
        result = "You Win";
    }else if(player === "scissors" && idx === 2){
        com = game[idx];
        result = "tie";
    }
    const gameResult:string = `You got ${player} and Computer got ${com} :  ${result}`;
    return gameResult;
}

// Rule input "rock" or "paper" or "scissors"
console.log(rockGame("scissors"));

