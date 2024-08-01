const reverseString = (myStr) => {
    if(myStr.length < 1){
        return "";
    } else{
        return myStr[myStr.length - 1] + reverseString(myStr.slice(0, myStr.length - 1));
    }
}

console.log(reverseString("rahat"));

// 

const isPalindrome = (myStr) => {
    if(myStr.length === 0){
        return true
    }
    if(myStr[0] !== myStr[myStr.length-1]){
        return false
    }
    return isPalindrome(myStr.slice(1,myStr.length-1))
}   

console.log(isPalindrome("Rahat"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("hi!"))