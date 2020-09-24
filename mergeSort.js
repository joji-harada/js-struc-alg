/*  MERGESORT Pseudo
    There are two funcitons to this algorithm.
        1. splitting the array in half until there is 0 or 1 items
        2. merging the split arrays in order

    The merge(arr1, arr2) function combines 2 arrays item by item
    in order and returns a sorted array.

    The mergeSort(arr) function will do the splitting and call
    merge(arr1, arr2) at the end. It will use recursion to split
    the array down to 0 or 1 length arrays.
*/

const merge = (arr1, arr2) => {
    let arr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

//test
console.log(mergeSort([5,2,7,1]));