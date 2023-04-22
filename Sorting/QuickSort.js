function pivotElement(arr, start = 0, end = arr.length) {
    let pivot = arr[start]
    let pvtIndex = start

    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pvtIndex++
            [[arr[pvtIndex]], [arr[i]]] = [[arr[i]], [arr[pvtIndex]]]
        }
    }

    [[arr[pvtIndex]], [arr[start]]] = [[arr[start]], [arr[pvtIndex]]]

    return pvtIndex
}


function quickSort(arr,left=0,right=arr.length){
    if (left < right) {
        let pivot = pivotElement(arr,left,right)
        //left
        quickSort(arr,left,pivot-1)
        //right
        quickSort(arr,pivot+1,right)
    }

    return arr
}


console.log(quickSort([4,6,9,1,2,5,3,124,3,4,52,5,3,2]))