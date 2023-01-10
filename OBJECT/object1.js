let str = "Huyen Trang";
console.log(str.length);     // 11   
let arr = str.split(" ");   
console.log(arr);           // ["Huyen", "Trang"]

console.log(str.charAt(2)); // y

console.log(str.startsWith("Ha"));      // false
console.log(str.indexOf("Trang"));      // 6

console.log(str.substring(3,5));        // en

console.log(str.toUpperCase());         // HUYEN TRANG


let date = new Date();
console.log(date);          
console.log(date.getMonth());       // 0
console.log(date.getDay());         // 2
console.log(date.getDate());        // 10

console.log(Math.max(7,1,6,0));     // 7

console.log(Math.round(5.41));      // 5
console.log(Math.floor(5.2));       // 5
console.log(Math.ceil(5.7));       // 6