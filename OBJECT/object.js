/**
 1. Các kiểu dữ liệu: string, number, array, boolean, 
 object (tự định nghĩa)
 
 let a = 5;
let b = 5;
// string literal
console.log(`Tổng của 2 số ${a} và ${b} là ${a+b} `);

// object literals
/**
 * Trong 1 đối tượng:
 * thuộc tính: những đặc điểm của đối tượng
 * phương thức - hàm: những cái hành vi, hành động của đối tượng

let mercedes = {
    "color": "Xanh",
    "name": "Mercedes GL200",
    "refuel": ()=>{
        console.log("Đi ra phía sau, mở ra....");
    }
}
let audi = {
    "color" : "Trang",
    "name" : "Audi V10",
    "refuel": function (){
        console.log("Tự đổ xăng...");
    }
}
let vinfast = {
    "color" : "Đen",
    "name" : "Vinfast VF8",
    "refuel": function (){
        console.log("...");
    }
}

/**
 * Cú pháp khai báo 1 class
 * Class là gì: 1 một bản thiết kế để tạo ra đối tượng
 * Trong class thì gồm: thuộc tính (colors, name) và phương thức(toString())
 * Từ khóa this: đại diện cho đối tượng this.name, this,colors

function Car(colors, name){
    this.colors = colors;
    this.name = name;
    this.toString = function(){
        console.log(this.name + " - ", this.colors);
    }
}
function Car(colors, name){
    // xu ly gi do
}

let mercedes1 = new Car(["Trắng", "Vàng"], "Mercedes GL200");
mercedes1.toString();
let audi1 = new Car(["Xanh"], "Audi V10");
audi1.toString();

getter (getGender): lấy thông tin của đối tương, 
setter(setGender): gán lại thông tin của đối tương


function Student(id, fullName, gender){
    this.id = id;
    this.name = fullName;
    this.gender = gender;
    this.hobbies = [];
    this.setHobbies = function(hobbies){
        this.hobbies = hobbies;
    }
    this.greeting = function(){
        return "I am " + this.name + " gender: " + this.gender;
    }
    this.setGender = function(gender){
        this.gender = gender;
    }
    this.getGender = ()=>{
        return this.gender;
    }
    this.getHobbies = function(){
        return this.hobbies;
    }
    this.getListHobbies = function(){
        if(this.hobbies.length == 0){
            return `${this.name} chưa có sở thích nào`;
        }else{
            return "Danh sách sở thích của: " + this.name + " là: " + this.hobbies.join("-");
        }
       
    }
}
let s1 = new Student(1, "Anh Tai", "NAM");
let s2 = new Student(2, "Huong Do", "NU");
let s3 = new Student(3, "Trieu Huy", "NAM");
let s4 = new Student(4, "Huyen trang", "NU");

// console.log(s1.greeting());
// console.log(s2.greeting());
// console.log(s3.greeting());
// console.log(s4.greeting());
// s4.setGender("BE DE");
// console.log(s4.greeting());

// console.log(s4.getGender());
// s4.setGender("BE DE");
// console.log(s4.getGender());
s4.setHobbies(["Buffet", "đọc sách"]);
console.log(s4.getListHobbies());
console.log(s2.getListHobbies());
 */








