/**
// Khỏi tạo 1 mảng (danh sách) : rỗng
let names = [];
let ids = new Array();

let names1 = [,,,,];        // size: 5
let ids1 = new Array(10);   // size: 10




// Khởi tạo 1 mảng và gán giá trị cho mảng
let fullNames = ["Huyen Trang", "Quang Dang", "A Tai"];
let ids2 = new Array(1,3,5);    // size: 3

let size = fullNames.length;       // arr
console.log(size);


// Trong mảng nên chỉ chứa 1 loại kiểu dữ liệu, còn js cho phép chứa nhiều kiểu dữ liệu
let students = ["Quang", "Tai", 1]


let fullNames = ["Huyen Trang", "Quang Dang", "A Tai"];

// fullNames[0] : truy xuất tới phần tử của mảng theo vị trí
// fullNames[fullNames.length - 1]: truy xuất tới vị trí cuối cùng
console.log(fullNames[0]);
console.log(fullNames[2]);
console.log(fullNames[fullNames.length - 1]);
// console.log(fullNames[5]);      // báo lỗi: vì vượt quá kích thước mảng

// Duyệt qua mảng
let fullNames = ["Huyen Trang", "Quang Dang", "A Tai"];
for(let i=0; i< fullNames.length; i++){
    console.log(fullNames[i]);

let size = 10;
let min = 5;
let max = 10;
let arr = [];
for(let i=0;i<size;i++){
    arr[i] =  Math.floor(Math.random()*(max- min + 1) + min);
}
console.log(arr);

// tinh tổng các phần tử trong mảng
let total = 0;
for(let i=0;i<arr.length;i++){
    total += arr[i];
}
console.log("Tổng là: " + total);

let size = 10;
let min = 5;
let max = 10;
let arr = [];
for(let i=0;i<size;i++){
    arr[i] =  Math.floor(Math.random()*(max- min + 1) + min);
}
console.log(arr);

// tìm xem số 1 có xuất hiện trong mảng hay không
let arr = [1, 8, 7, 10, 7, 5, 7, 7, 8, 7];
console.log(arr);
let value = 7;
for(let i=0;i<arr.length;i++){
    if(arr[i]== value){
        console.log(`vi tri cua ${value} la: ${i}`);
        break;
    }
}


// tìm xem số 7 xuất hiện lần thứ 3 tại ví trí mấy
let arr = [1, 9, 7, 10, 4, 5, 7, 16, 8, 7];
console.log(arr);
let value = 7;
let count =0;
for(let i=0;i<arr.length;i++){
    if(count==2 && arr[i] == value){
        console.log("Vi tri " + i);
        break;
    }
    if(arr[i]== value){
        count++;
    }
}


*/


// Tạo ra 1 số ngẫu nhiên từ [min-max]
// Math.random(): 0< x(0.2456) <1
// let number = Math.floor(Math.random()*(max- min + 1) + min);
// console.log(number);









let arr = [1, 9, 7, 10, 4, 5, 7, 16, 8, 7];
// tìm xem trong mảng có bao nhiêu số chính phương

