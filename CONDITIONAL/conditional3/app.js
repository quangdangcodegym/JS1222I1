function handleBtnCalculator() {
    let month = +document.getElementById("txtMonth").value;

    /**
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("pShowDay").innerText = "Tháng " + month + " có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("pShowDay").innerText = "Tháng " + month + " có 30 ngày";
            break;
        case 2:
            document.getElementById("pShowDay").innerText = `Tháng ${month} có 28 ngày`;
            break;
    }
        */

    let check31Day = month==1 || month==3||month==5 ||month==7 ||month==8||
    month==10||month==12;

    if(check31Day){
            document.getElementById("pShowDay").innerText = "Tháng " + month + " có 31 ngày";
    }
    let check30Day = month==4 || month==6||month==9||month==11
    if(check30Day){
        document.getElementById("pShowDay").innerText = "Tháng " + month + " có 30 ngày";
    }
    let check28Day = month==2;
    if(check28Day){
        document.getElementById("pShowDay").innerText = "Tháng " + month + " có 28 ngày";
    }

}

function handleTxtMonthChange(){
    let month = +document.getElementById("txtMonth").value;

    let check31Day = month==1 || month==3||month==5 ||month==7 ||month==8||
    month==10||month==12;

    if(check31Day){
            document.getElementById("pShowDay").innerText = "Tháng " + month + " có 31 ngày";
    }
    let check30Day = month==4 || month==6||month==9||month==11
    if(check30Day){
        document.getElementById("pShowDay").innerText = "Tháng " + month + " có 30 ngày";
    }
    let check28Day = month==2;
    if(check28Day){
        document.getElementById("pShowDay").innerText = "Tháng " + month + " có 28 ngày";
    }
}