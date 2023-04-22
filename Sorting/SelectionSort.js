function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j
            }
        }
        if (i !== minimum) [[arr[i], arr[minimum]]] = [[arr[minimum], arr[i]]]
    }
    return arr
}


let array = [20, 10, 40, 30, 50]


console.log(SelectionSort(array))