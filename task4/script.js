


function bubblesort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let x = 0; x < n - 1 - i; x++){
            if(arr[x+1] < arr[x]){
                let added = arr[x+1];
                arr[x+1] = arr[x];
                arr[x] = added;
            }
        }
    }
    return arr;
}

let array = [2,5,4,3,1,52,23,3,18,16,28];


console.log(array);
console.log(bubblesort(array));