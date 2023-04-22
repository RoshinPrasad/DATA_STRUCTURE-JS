function merge(arr1,arr2){
    let newArr = []
    let length =  arr1.length + arr2.length
    var j = 0
    var k = 0
    for (let i = 0; i < length; i++) {
        if(arr1[j] > arr2[k]  ||  !arr1[j]  ){
            newArr.push(arr2[k])
            k++
        }else{
            newArr.push(arr1[j])
            j++
        }
    }
    return newArr
}


function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

console.log(mergeSort([3,1,4,5]))