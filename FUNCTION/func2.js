
let sum10 = function (a,b){

}
function sum(a,b){
    return a+b;
}

// arrow function (hàm mũi tên), hàm vô danh: anonymous function
// 
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

// Nếu trong thân hàm mà chỉ có 1 dòng lệnh thì có thể bỏ {}
// let hello1 = () => console.log("Hello JS1222I1");


// console.log(sum(2,3));

// console.log(sum1(5,5));

// console.log(hello());


const fruits = ["apple", "orange", "cherry ngon"];
/**
fruits.forEach(myFunction);

function myFunction(item,index){
    console.log(`${item} - ${index}`);
}

fruits.forEach((item, index)=>{
    console.log(`${item} - ${index}`);
});
 */

// function myFunc(item,index, arr){
//     if(item.includes("cherry")){
//         return true;
//     }
// }

let index = fruits.findIndex((item,index,arr)=>{
    if(item.includes("cherry")){
        return true;
    }
})
console.log(index);
// console.log(fruits.findIndex(myFunc));


// tìm hiểu hàm: map, find, forEach