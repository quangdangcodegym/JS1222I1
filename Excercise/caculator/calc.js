function btnClick(btn){
    // btn: 4,3,*,/+

    /**
        Dài quá nha!!!
        let str = document.getElementById("txtCalc").value;
        str += btn;
        document.getElementById("txtCalc").value = str;
     */

    document.getElementById("txtCalc").value += btn;
}
function btnClear(){
    document.getElementById("txtCalc").value = "";
}
function btnEqualClick(){
    let str =  document.getElementById("txtCalc").value;
    try{
        let result = eval(str);
        document.getElementById("txtCalc").value = result;
    }catch(err){
        alert("Input caculator fail")
    }
    
    
}