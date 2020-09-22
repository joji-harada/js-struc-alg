// Insertion Sort: left portion of arr is sorted starting at arr[i]
// items to the right are inserted in sorted position to the left portion.

/* PSEUDO
***
    loop i starts at 1
        store currentVal at i for comparison
        loop j starts at prev element, decrements.
            if arr[j] is > than currentVal then move arr[j] up one
        when arr[j] is < currentVal insert currentVal in arr
    return arr
***
*/

function insertsionSort(arr) {
    let i, j;

    for(i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

insertsionSort([2,7,14,9,1,4,8]);