/**
let arr = [3,6,1,5];

let total = 0;
for(let i=0;i<arr.length;i++){
    total += arr[i];
}

console.log("Tong la arr: " + total);


let numbers = [1,2,5,1];
let total1 = 0;
for(let i=0;i<numbers.length;i++){
    total1 += numbers[i];
}
console.log("Tong la number: " + total1);


Hàm: để thực hiên 1 chức năng nào đó
    - Tái sử dụng code
    - quy ước đặc tên:  camel case:     getTotal()    chữ cái đầu tiên: động từ, các chữ tiếp theo là danh từ  
                        Pascal case:    GetTotal()

    function tenHam([parameter]){
        // viết code ở đây: thân hàm
        return string/integer/array;
    }
    // Gọi hàm: call function, invoke function
    tenHam(parameter)


    function getTotal(numbers){
        let total = 0;
        for(let i=0;i<numbers.length;i++){
            total += numbers[i];
        }
        return total;
    }

    let arr = [3,6,1,5];
    let numbers = [1,2,5,1,5,7,536,5];
    let totalNumber = getTotal(numbers);
    let totalArray = getTotal(arr);

    console.log("[Ham] Tong la number: " + totalNumber);
    console.log("[Ham] Tong la arr: " + totalArray);

    function showInfoArray(arr){
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
        
    }
    showInfoArray(arr);
    showInfoArray(numbers);
    let size = 5;
    let min = 0;
    let max = 5;

    function createArray(size, min, max) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
        }
        return arr;
    }
    let arr1 = createArray(size, min, max);
    console.log(arr1);
    let arr2 = createArray(10, 100, 200);
    console.log(arr2);

    // arr= [6,5,10,7]
    // str = '6-5-10-7'
    function join(arr, strSpecial){
        let result = "";
        for(let i=0;i<arr.length;i++){
            if(i==arr.length-1){
                result += arr[i];
            }else{
                result += arr[i] + strSpecial;
            }
        }
        return result;
    }
    console.log(join(arr1, "--"));
    console.log(join(arr2, "+"));

**/

// arr= [6,5,10,7]




/**
// viết hàm:    + tìm xem trong mảng có bao nhiêu số chính phương
                + tìm vị trí số chẵn cuối cùng trong mảng 
                + viết hàm nối 2 mảng
                + tìm xem số 1 có xuất hiện trong mảng hay không
*/



