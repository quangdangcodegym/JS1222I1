function getQuantitySquareNumberInArray(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        for(let j=2;j<arr[i];j++){
            if(j*j==arr[i]){
                console.log(`${arr[i]} la so chinh phuong`);
                count++;
            }
        }
    }
    return count;
}
let arr = [4,5,1,9,16];
let quantitySquareNumber = getQuantitySquareNumberInArray(arr);
console.log(quantitySquareNumber);


let a1 = [1,2];
let a2 = [4,7,1];

function concat(arr1, arr2){
    let results = [];
    for(let i=0;i<arr1.length;i++){
        results.push(arr1[i]);
    }
    for(let i=0;i<arr2.length;i++){
        results.push(arr2[i]);
    }

    return results;
}

console.log(concat(a1, a2));

