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
  let word = ""
  word += string[string.length-1]
  console.log(string[string.length-1])
  if (string.length > 1){
    let substring = string.substring(0, string.length-1)
    reverseString(substring)
  }
  else {
    return true
  }
}
