// let number = Number(prompt("Nhap vao so ban muon kiem tra"));

// if(number % 2 == 0){
//     console.log("Day la so chan")
// }else{
//     console.log("Day la so le")
// }

// Trong if/else mà chỉ có 1 câu lệnh thì có thể bỏ cặp ngoặc nhọn
// if(number % 2 == 0)
//     console.log("Day la so chan")
// else
//     console.log("Day la so le")


/**
 *  // Dùng if
    let number = Number(prompt("Nhap điểm vào tui kiểm tra:"));
    if(number >= 9 && number <=10){
        console.log("Xuất sắc");
    }
    if(number >=8 && number <9){
        console.log("Giỏi");
    }
    if(number >=7 && number <8){
        console.log("Khá");
    }
    if(number >=5 && number <7){
        console.log("Trung bình");
    }
    if(number >=0 && number <5){
        console.log("Yếu");
    }
    if(number <0 || number >10){
        console.log("Nhập điểm không hợp lệ");
    }
 */

    // let number = Number(prompt("Nhap điểm vào tui kiểm tra:"));

    // if(number >10 || number<0){
    //     console.log("Nhập điểm không hợp lệ");
    // }else if(number >=9){
    //     console.log("Xuất sắc");
    // }else if(number >=8){
    //     console.log("Giỏi")
    // }else if(number >=7){
    //     console.log("Khá")
    // }else if(number >=5){
    //     console.log("Trung bình")
    // }else{
    //     console.log("Yếu")
    // }

    // let number = Number(prompt("Nhap điểm vào tui kiểm tra:"));

    // if(number >=9 && number <=10){
    //     console.log("Xuất sắc");
    // }else if(number >=8 && number <9){
    //     console.log("Giỏi")
    // }else if(number >=7 && number <8){
    //     console.log("Khá")
    // }else if(number >=5 && number <7){
    //     console.log("Trung bình")
    // }else if(number >=0 && number <5){
    //     console.log("Yếu")
    // }
    // else{
    //     console.log("Điểm không hợp lệ")
    // }


    /**
     * Switch case
         let month = Number(prompt("Nhập vào 1 tháng: "));
        // month = 4
    switch(month){
        case 1:
        case 2:
        case 3:
            console.log("Quí 1");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Quí 2");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Quí 3");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Quí 4");
            break;
        default :
            console.log("Nhập sai tháng rồi")
    }
     */



    /**
     Toán tử 3 ngôi
     String literal
         let number1 = +prompt("Nhập vào só thứ 1: ");       // 5
    let number2 = Number(prompt("Nhập vào só thứ 1: "));    // 15

    if(number1>number2){
        // console.log(number1 + " lon hon " + number2);
        // String literal
        console.log(`${number1} lon hon ${number2}`)
    }else{
        console.log(number1 + " bé hon " + number2);
    }

    // ... ? ... : ...
    number1 > number2 ? console.log(`${number1} lon hon ${number2}`) : console.log(`${number1} bé hon ${number2}`);
     */

    /**
     Bài điểm dùng switch case
     let diem = +prompt("Nhap vao diem: ");
    // diem = 9.5
    switch(true){   // biểu thức true: 
        case diem >=9 && diem <=10:
            console.log("Xuất sắc");
            break;
        case diem >=8 && diem <9:
            console.log("Giỏi");
            break;
        case diem >=7 && diem <8:
            console.log("Khá");
            break;
        case diem >=5 && diem <7:
            console.log("Trung bình");
            break;
        case diem >=0 && diem <5:
            console.log("Yếu");
            break;
        default :
            console.log("Điểm không hợp lệ");
    }

     */



// console.log(Math.floor(1.1));   // làm tròn xuống
// console.log(Math.ceil(1.1));    // làm tròn lên
    
let diem = +prompt("Nhập điểm vào đi: ");       // 9.7
let diem_fmt = diem > 10 || diem <0 ? -1 : Math.floor(diem);
switch(diem_fmt){
    case 10:
    case 9:
        console.log("Xuất sắc");
        break;
    case 8:
        console.log("Giỏi");
        break;
    case 7:
        console.log("Khá");
        break;
    case 6:
    case 5:
        console.log("Trung bình");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Yếu");
        break;
    case -1:
        console.log("Điểm lớn bé hơn 0 hoặc lớn hơn 10 rồi");
        break;
    default:
        console.log("Điểm không hợp lệ")

}