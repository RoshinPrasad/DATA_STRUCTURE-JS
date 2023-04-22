function InsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > numberToInsert) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = numberToInsert
    }
}

const arr = [8, 20, -2, 4, -6]

function InsertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    return arr
}


console.log(InsertionSort2(arr));