//fibonaci implementation

function fib(num, memo = []){
    if(memo[num] !== undefined) return memo[num];
    if (num <= 2) return 1;
    let result = fib(num - 1, memo) + fib(num - 2, memo);
    memo[num] = result;
    return result;
}

//BIG O IS 2^N

console.log(fib(100));