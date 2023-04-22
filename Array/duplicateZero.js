let arr = [2, 3, 4, 0, 8, 6]

var duplicateZeros = function (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        arr[i] === 0 && newArr.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newArr[i];
    }
    console.log(arr)
}


duplicateZeros(arr)
