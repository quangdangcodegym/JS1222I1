/**
let sum1 = (a,b) =>{
    return a+b;
}
let hello = () =>{
    console.log("Hello JS1222I1");
}
let hello1 = (a) =>{
    console.log("Hello " + a);
}
let hello2 = a => console.log("Hello " + a);

console.log(hello1("Trang"));




// Tham chiếu
    + Khi truyền mảng, đối tượng vào hàm thì bên trong HÀM 
    thay đổi thì bên ngoài thay đỏi theo
    const fruits = ["Cam", "Xoai", "Quyt"];

    function changeArray(arr){
        arr[1] = "Xoai non"
    }
    changeArray(fruits);
    console.log(fruits);
// Tuyền tham trị: 
    sao chép giá trị
    Bên trong hàm thay đổi thì bên ngoài VẪN không đổi
    let a = 5;
    function changeValue(a){
        a=10;
    }
    console.log(a);

**/







