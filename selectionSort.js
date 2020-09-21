// Sort the array by selecting min val and placing it at beginning of arr
/*
    loop i will start at arr[0] and incrememnt up++
        set min to arr[i], minIdx to i
        inner loop j will compare agains arr[i]
            store/update min
            swap arr[i] with min if it is lower. (compare num val)
    return arr
*/

function selectionSort(arr){
    let min, minIdx;

    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };

    for(let i = 0; i < arr.length; i++){
        minIdx = i;
        min = arr[i];

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < min) {
                min = arr[j];
                minIdx = j;
            };
        }

        if(minIdx !== i) swap(arr, i, minIdx);
    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17]);