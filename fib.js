//fibonaci implementation

function fib(num, memo = []){
    if(memo[num] !== undefined) return memo[num];
    if (num <= 1) return num;
    let result = fib(num - 1) + fib(num - 2);
    memo[num] = result;
    return result;
}

//BIG O IS 2^N