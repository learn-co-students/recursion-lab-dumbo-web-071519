// Code your solution here!

function printString(myString){
    console.log(myString[0]);
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString){
    if (myString.length < 2) {
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];
    }
}

function isPalindrome(string){
    let i = string.length
    if (i < 2){
        return true
    }
    else if(string[i - 1] === string[0]){
        return isPalindrome(string.substring(1, i - 1))
    } else {
        return false
    }
}

function addUpTo(myArray, index){
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index] 
}

function maxOf(myArray){
    if (myArray.length === 1) {
        return myArray[0];
      } else {
        return Math.max(myArray.pop(), maxOf(myArray));
      }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }









