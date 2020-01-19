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
