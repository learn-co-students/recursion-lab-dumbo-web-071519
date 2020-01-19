// Code your solution here!

// Example Problem
function printString(myString) {
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    console.log(myString[0])
    printString(mySubString)
  } else {
    return console.log(myString[0])
  }
}

// STRING CHALLENGES

// Problem 1
function reverseString(string) {
  if (string.length > 1) {
    let subString = string.substring(string.length-1, string.length)
    return subString + reverseString(string.substring(0, string.length-1))
  } else {
    return string[0]
  }
}

// Problem 2
function isPalindrome(string) {
  if (string.length > 1) {
    let firstAndLast = string[0] === string[string.length-1]
    let substring = string.substring(1, string.length-1)
    if (firstAndLast) return isPalindrome(substring)
    else return false
  } else {
    return true
  }
}

// ARRAY CHALLENGES

// Problem 1
function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index-1)
  }
  else {
    return array[0]
  }
}

// Problem 2
function maxOf(array) {
  if (array.length-1 > 0) {
    if (array[array.length-1] > array[array.length-2]) {
      array.splice(array.length-2, 1)
      return maxOf(array)
    }
    if (array[array.length-2] > array[array.length-1]) {
      array.splice(array.length-1, 1)
      return maxOf(array)
    }
  } else {
    return array[0]
  }
}

// Problem 3
function includesNumber(array, number) {
  if (array.length-1 > 0) {
    if (array[0] === number) {
      return true
    } else {
      array.shift()
      return includesNumber(array, number)
    }
  } else {
    if (array[0] === number) return true
    else return false
  }
}
