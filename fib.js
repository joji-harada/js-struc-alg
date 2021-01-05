//fibonaci implementation

function fib(num){
    if (num <= 1) return num;

    return fib(num - 1) + fib(num - 2);
}

//BIG O IS 2^N