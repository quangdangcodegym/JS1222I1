var a = 5;      // số nguyên integer
let b = 5.0     // số thập phân, decimal
let c = "JS2022"    // kiểu chuỗi - string
let d = 'c'         // kiểu kí tự - character
var e = true;       // kiểu đúng sai - boolean
var e1 = false;

a = "Hello";
console.log(a);
console.log(typeof a)       // toán tử để lấy kiểu dữ liệu của biến

let firstName1 = "Quang Dang";

const max = 10;     // Khai báo hằng số thì dùng const
//  max = 12;       // hằng số thì không thể gán giá trị
console.log(max);

let x1 = "";        // "",0, null, underfine ==> quy về đung/sai là FALSE
x1 = 0;
x1= null;
x1=undefined;
console.log(Boolean(x1));

let x2 = 30;        // nếu có giá trị => quy về dung/sai thì là TRUE
console.log(Boolean(x2));

// ------------------OPERATOR
// Toán học: +,-,*,/

let count = 0;
// count++;         // count = count + 1;
count = count+1;
count *= 5;         // count = count * 5;
console.log(count)


// Cộng chuỗi
let firstName = 'Đáng" Va';
let lastName = "Quang";

let fullName = firstName + " " +lastName;

console.log(fullName)

let number1 = 5;
let number2 = 5;
console.log(number1+number2)


let number3;        // underfine
console.log(number3)
number1 = number1 + number3;
console.log( number1)       //NaN   Not a number

let number4 = null      // có giá trị null
number4 = number1 + number3;
console.log(number4)        // NaN not a number



