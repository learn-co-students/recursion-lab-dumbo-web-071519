// Code your solution here!

function printString(string){
  console.log(string[0])
  if (string.length > 1){
    let substring=string.substring(1, string.length)
    printString(substring)
  }
  else {
    return true
  }
}

function reverseString(string){
  if (string.length < 1){
    return ""
  }
  else {
    return reverseString(string.substring(1)) + string.charAt(0)
  }
}

function isPalindrome(string){

  if (string.length<2){
    return true
  }

  if (string.charAt(0) == string.charAt(string.length-1)){
    let substring = string.substring(1, string.length-1)
    return isPalindrome(substring)
  }

  return false
}

function addUpTo(array, index){

  if (index==0){
    return array[index]
  }

  if (index>0){
    return array[index] + addUpTo(array.slice(0,index), index-1)
  }

}

function maxOf(array){
  // [1,5,3,2,9]
  // [5,3,2,9]
  // [5,2,9]
  // [5,9]
  // [9]
  if(array.length==1){
    return array[0]
  }else {
    return Math.max(array.pop(), maxOf(array))
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
