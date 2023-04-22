let arr = [-5,2,4,6,10]

function BinarySearch(arr,target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor( (leftIndex + rightIndex) / 2)
        if ( target === arr[middleIndex]) {
            return middleIndex
        }
        if ( arr[middleIndex] < target ){
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}


console.log(BinarySearch(arr,10))
console.log(BinarySearch(arr,6))
console.log(BinarySearch(arr,20))