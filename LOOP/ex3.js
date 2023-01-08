/**
// Tính tổng 30 số tự nhiên đầu tiên chia hết cho 7

let total = 0;
let count = 0;
for(let i=7;;i+=7){
    if(count==30){
        break;
    }
    total+= i;
    count++;
}
console.log(`Tong 30 so tu nhien la ${total}` );

 */

// Tính tổng 30 số tự nhiên đầu tiên chia hết cho 7
var total = 0;
let count = 0;
let i = 1;


while(count<3){
    // if(count==3){
    //     break;
    // }
    if(i%7 == 0){
        total += i;
        count++;
    }
    i++;
    // let fullName = "A Tai";
    var lastName = "Tai";
}


console.log(`Tong 3 so tu nhien la ${total}` );

// let không cho khai báo lại, var cho khai báo lại biến đó
// let total =5;

// var total =10;

console.log(lastName);