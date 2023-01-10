/**
// Tạo đối tượng dùng cách object literal
let students = [
    {
        id: 1,
        name: "Huyen Trang",
        gender: "Nu",
        hobbies: []
    },
    {
        id: 2,
        name: "Huuong Do",
        gender: "Nu",
        hobbies: []
    },
    {
        id: 3,
        name: "Anh Tai",
        gender: "NAM",
        hobbies: ["Bida", "Đá bóng"]
    }
]

 */

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
let s2 = new Student(2, "Huong Do", "Nu", []);

let students = [s1, s2, new Student(3, "Anh Tài", "NAM", ["Bida", "đá bóng"])];

/**
// Hiển thị ra danh sách tên học viên
for(let i=0;i<students.length;i++){
    let info = `ID: ${students[i].id} Name: ${students[i].name} Gender: ${students[i].gender}`;
    console.log(info);
}
 */
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

// Liệt kê ra tất cả các sở thích của students
// Tìm ra những người có chung sở thích
