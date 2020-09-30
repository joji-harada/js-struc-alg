/*
    Helper method to get digit where i is indexed from right to left.
    It will use absolute value for negative int. Then divide by 10
    to the power of i and % 10 to get the digit in the place.

    Second helper method to figure out max digit count.

    Third helper method to return the count of the number with 
    the most digits in a list of nums.

    
*/

function getDigit(num, i){
    return Math.floor(math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}