/**
 Map: theo dạng (key,value), key thì không được trùng lặp
 tạo ra 1 đối tượng kiểu Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);          // thêm giá trị vào map
fruits.set("bananas", 300);
fruits.set("oranges", 200);


fruits.set("tao", 10);
fruits.set("tao", 100);

fruits.delete("apples")             // xóa theo key
console.log(fruits);
// Set: nó lưu 1 danh sách, các giá trị là duy nhất
// Khai báo 1 đối tượng letter kiểu Set
const letters = new Set();
letters.add("Quang");
letters.add("Tai");
letters.add("Tai");
letters.add("SuBo");
console.log(letters);

/**
// Hiển thị ra danh sách tên học viên
for(let i=0;i<students.length;i++){
    let info = `ID: ${students[i].id} Name: ${students[i].name} Gender: ${students[i].gender}`;
    console.log(info);
}

for(let i=0;i<students.length;i++){
    console.log(students[i].showInfo());
}

// Tìm ra người có nhiều sở thích nhất
let maxIndex = 0;
for(let i=1;i<students.length;i++){
    if(students[i].hobbies.length > 
        students[maxIndex].hobbies.length){
        maxIndex = i;
    }
}
console.log("Người có nhiều sở thích nhất");
console.log(students[maxIndex].showInfo());

//Bài 1:  Liệt kê ra tất cả các sở thích của students
let sothichs = new Set();
for(let i=0;i<students.length;i++){
    for(let j=0;j<students[i].hobbies.length;j++){
        sothichs.add(students[i].hobbies[j]);
    }
}
console.log(sothichs);


// Tìm ra những người có chung sở thích
let sameHobbies = new Map();
// (key, value) => ("sothich", Set<Nguoi>)
for(let i=0;i<students.length;i++){
    for(let j=0;j<students[i].hobbies.length;j++){
        if(sameHobbies.get(students[i].hobbies[j])=== undefined){
            let persons = new Set();
            persons.add(students[i].name)
            sameHobbies.set(students[i].hobbies[j], persons)
        }else{
            let persons = sameHobbies.get(students[i].hobbies[j]);
            persons.add(students[i].name);
        }
    }
}
console.log(sameHobbies);
for(let item of sameHobbies.keys()){
    if(sameHobbies.get(item).size == 1){
        sameHobbies.delete(item)
    }
}
console.log(sameHobbies);


function Student(id, name, gender, hobbies){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.hobbies = hobbies;
    this.showInfo = function(){
        return `ID: ${this.id} Name: ${this.name} Gender: ${this.gender}`;
    }
}
let s1 = new Student(1, "Huyen Trang", "Nu", ["Đá bóng", "Bida", "Cau long"]);
let s2 = new Student(2, "Huong Do", "Nu", ["Bida"]);

let stds = [s1, s2, new Student(3, "Anh Tài", "NAM", ["Bida", "Đá bóng"])];

let m1 = 1;
for (let i = 0; i < stds.length; i++) {
    for (let m = m1; m < stds.length; m++) {
        let d = 0;
        let sameHobbies = [];
        let name1 = "";
        let name2 = "";
        for (let j = 0; j < stds[i].hobbies.length; j++) {
            for (let n = 0; n < stds[m].hobbies.length; n++) {
                if (stds[m].hobbies[n] == stds[i].hobbies[j]) {
                    d++;
                    sameHobbies.push(stds[m].hobbies[n]);
                    name1 = stds[i].name;
                    name2 = stds[m].name;
                }
            }
        }
        if (d > 0) {
            console.log(`${name1} có ${d} sở thích giống với ${name2} đó là: ${sameHobbies.join(", ")}`);
        }
    }
    m1++;
}




const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", ...["BMW", "AA", "BBB"]];


console.log(cars2);     //[ 'Saab', 'Volvo', 'BMW', 'AA', 'BBB' ]

const cars3 = ["Saab", "Volvo", ["BMW", "AA", "BBB"]];
console.log(cars3);


// toán tử rest parameter: giúp 1 hàm xử lý ĐỐI SỐ truyền vào hàm mà ta ko xác định được số lượng
                            nó chỉ lấy phần còn lại
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
  }
  
  let x = sum(1,1);
console.log(x);


function sum(a, b, ...args) {
    console.log(a);
    console.log(b);
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
  }
  
  let x = sum(1,10, 3, 2);

console.log(x);


// Giá trị mặt định của tham số y = 10
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  console.log(myFunction(5, 1)); 


    function sum(a, b){
    console.log(a);         // undefined
    console.log(b);         // undefined
    return a + b;
  }
  // khi gọi 1 hàm thì có thể truyền tham số hoặc không
  // Nếu không truyền thì giá trị của tham số là undefined
  console.log(sum());       

 */

// Spread (...) Operator: toán tử rãi, giúp mở rộng 1 mảng, hoặc 1 đối tượng
  const cars2 = ["Saab", "Volvo", ...["BMW", "AA", "BBB"]];//[ 'Saab', 'Volvo', 'BMW', 'AA', 'BBB' ]
  console.log(cars2);

  const cars3 = ["Saab", "Volvo", [..."BMW"]];  //[ 'Saab', 'Volvo', [ 'B', 'M', 'W' ] ]
  console.log(cars3);

  const cars4 = ["Saab", "Volvo", ...[..."BMW"]]; //[ 'Saab', 'Volvo', 'B', 'M', 'W' ]
  console.log(cars4);

  let s1 = {
    id: 1,
    name: "Quang"
  }
  let c1 = {
    ... s1,
    nameClass : "JS22I1",
    room: "ADA"
  }
console.log(c1);


cars2.concat()















