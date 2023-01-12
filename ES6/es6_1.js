/**
// hàm với 1 tham số ghi đầy đủ
let hello = (val) => "Hello " + val;
console.log(hello(5));
// hàm với 1 tham số: có thể vứt dấu ()
let hello1 = val => "Hello " + val;
console.log(hello1(5));


// arrow function không có tham số
let hello2 = ()=> "Hello";
console.log(hello2());


// Khai báo 1 class
// Cách 1: Dùng funtion
function Car(name, year){
    this.name = name;
    this.year = year;
}
 */

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
let car1 = new Car("audi", 2022);
let car2 = new Car("merc", 2018);
console.log(car1);
console.log(car2);