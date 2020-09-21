
function bubbleSort(arr) {
    let noSwaps;
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };

    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

