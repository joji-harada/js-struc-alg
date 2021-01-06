//fibonaci implementation

function fibMemo(num, memo = []){
    if(memo[num] !== undefined) return memo[num];
    if (num <= 2) return 1;
    let result = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
    memo[num] = result;
    return result;
}

function fibTabulation(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}


console.log(fibMemo(100));
console.log(fibTabulation(100));