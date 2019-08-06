function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/ig, "");
    let reverse = str.split('').reverse().join('');
    return str === reverse;
}

palindrome("2_A3*3#A2");
