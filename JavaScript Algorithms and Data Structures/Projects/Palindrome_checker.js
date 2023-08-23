 palindrome = (str) => {
  str= str.replaceAll(/[\W_]/ig, "").toLowerCase()
  const reverse = str.split("").reverse().join("")
 // console.log(str===reverse)
  return str===reverse;
}

palindrome("ana");

//the palindrome function declared takes a the string "str" 
//the replaceAll() function replaces all non-alphnumeric xters, this is gotten by passing the regex /[\W_]/ig and it replaces the non-alpha with an empty space "" 
// while to lowerCase changes all uppercase letters to lowerCase
// split("") splits the string into an array of characters.
// reverse() reverses the order of the elements in the array.
// join("") joins the elements in the array back together into a string.
