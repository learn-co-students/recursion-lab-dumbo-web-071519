import { stringify } from "querystring";
import { reverse } from "dns";

// Code your solution here!

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(string){
    if(string.length < 2){
        return true
    } else if(string[0] === string[string.length - 1]){
        return isPalindrome(string.substring(1, string.length -1))
    } else{
        return false
    }
}

function addUpTo(array, index){
    return index ? array[index] + addUpTo(array, --index)  : array[index]
}
// addUpTo([1,2,3,4,5], 3) // 10

function maxOf(array){
    if(array.length === 1){
        return array[0]
    } else{
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, element){
    if(!array.length){
        return false
    }
    if(array[0] === element){
        return true
    } else{
        return includesNumber(array.slice(1), element)
    }
}