let string = '123423'
let newString='';
//123423
//1343
let count = 0
for(i=0;i<string.length;i++){
    for(j=0;j<string.length;j++){
        if(string[i]===string[j] && i!==j){
            var first = i
            var second = j
            break;
        }
    }
    if (first) {
        break;
    }
}

for (let i = 0; i < string.length; i++) {
    if (i!==first && i!== second) {
        newString += string[i]
    }
}

console.log(newString)