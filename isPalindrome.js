// invoke the function and log the results
console.log(isPalindrome("eevee"))

function isPalindrome(word) {
    word = word.split("")
    forward = []
    backward = []
    for(i=0; i < word.length; i++) {
        backward.push(word[i])
        forward.unshift(word[i])
    }
        forward = forward.join()
        backward = backward.join()
    if (forward === backward) {
        return true
    } else
    {
        return false
    }

}
//write the function
//turn the word into an array of characters
//create an empty forward array
//create an empty backward array
//loop through the word array
//push each letter into the backwards array and unshift into the forwards array
//end loop
//turn forward array and backward array into strings
//compare strings to see if they are equal
// if they are return true
// if they are not return false
