/*
    Helper method to get digit where i is indexed from right to left.
    It will use absolute value for negative int. Then divide by 10
    to the power of i and % 10 to get the digit in the place.
*/

function getDigit(num, i){
    return Math.floor(math.abs(num) / Math.pow(10, i)) % 10;
}

