// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function bubbleSort2(arr) {
    for(let i=arr.length ; i > 0; i--){
        for(let j=0; j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [[arr[j]],[arr[j+1]]] = [[arr[j+1]],[arr[j]]] 
            }
        }
    }
    return arr
}

console.log(bubbleSort2([4, 2, 3, 1]))