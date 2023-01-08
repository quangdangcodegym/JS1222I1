
// In ra các số từ 0 đến 99
// for(var i=0;i<3;i++){
//     var fullName = "Quang Dang";
//     console.log(i);
// }

// console.log("Giá trị của i: " + i);
// console.log(fullName);


//-------
// let i=0;
// for(;i<10;i++){
//     console.log(i);
// }

//--------In ra từ 1 đến 10
// let i = 0;
// for(;i<10;){
//     i++;
//     console.log(i);
// }

//-----------In ra từ 0 tới 9
// let i = 0;
// for (; ;) {
//     if (i >= 10) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

//----------In rac các số chắn từ 0 - 100
// for(let i=0;i<100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//----------In rac các số chắn từ 0 - 100
// for(let i=0;i<100; i+= 2){
//     console.log(i);
// }

// ----------In rac các số chắn từ 10 -> 0
// for(let i=10;i>=0;i--){
//     console.log(i);
// }

//-----------Tính tổng các số từ 1->3
// let sum=0;
// for(let i=0;i<=3;i++){
//     sum += i;
// }
// console.log(sum);

//-----------Tính tổng các số từ 1->3
// for(var i=0, sum=0; i<=3 ; i++){
//     sum += i;
// }
// console.log(sum);

//------------In ra số chẵn bỏ qua continue
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
        // break;
    }
    console.log(i);
}