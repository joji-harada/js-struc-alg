// QUICKSORT Pseudo
/*
 *  *** *** *** *** *** *** *** *** *** *** *** ***
 *  function pivot(arr, startIdx, endIdx)
 *      grab the pivot from start of arr
 *      store current pivot index in a var
 *      
 *      loop through arr until the end
 *          if pivot > current element
 *              increment pivot index && swap current element with pivot element
 * 
 *      swap the pivot with the pivot index
 *      return pivot index
 * 
 *  function quickSort(arr, left=0, right=length)
 *      if left < right
 *          pivotIdx = pivot(arr,left,right)
 *          
 *          //pivotIdx overrides "left" or "right" params respectively
 *          left recursive call()
 *          right recursive call()
 * 
 *      return arr      
 */


function pivot(arr, start = 0, end = arr.length){
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };

    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

//test
console.log(quickSort([5,1,8,-2,15,12,4,8,55]));