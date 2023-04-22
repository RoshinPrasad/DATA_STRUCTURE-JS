


function sumOfPair(arr, target) {
    let count = 0;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                count++;
            }
        }
    }
    console.log(count);
}

sumOfPair([2, 4, 6, 8, 0], 8)


