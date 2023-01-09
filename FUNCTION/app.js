let students = ["Anh Tai", "Văn Vĩ", "Su Bo"];

let idStudentEdit;
function renderStudents(){
    // let str = "";
    // for(let i=0;i<students.length;i++){
    //     str += `<div class="row"">
    //     <label for="" class="studentId">${i+1}</label>
    //     <label for="" class="studentName" id="studentName${i+1}">${students[i]}</label>
    //     <label><i class="fa-regular fa-pen-to-square" id="studentIcon${i+1}" onclick="handleEditClick(this)"></i><i class="fa-solid fa-user-xmark" onclick="handleDeleteClick(this)" id="studentIconDel${i+1}"></i></label>
    //     </div>
    //     `;
    // }
    let studentsHtml = students.map((item, index)=>{
        return `<div class="row"">
            <label for="" class="studentId">${index+1}</label>
            <label for="" class="studentName" id="studentName${index+1}">${item}</label>
            <label><i class="fa-regular fa-pen-to-square" id="studentIcon${index+1}" onclick="handleEditClick(this)"></i><i class="fa-solid fa-user-xmark" onclick="handleDeleteClick(this)" id="studentIconDel${index+1}"></i></label>
            </div>
            `;
    })

    console.log(studentsHtml);

    document.getElementById("idMainContainer").innerHTML = studentsHtml.join("");
}

renderStudents();
/**
    File .js thì thường đặt ở cuối, trước thẻ đóng body
    Khi để ở đầu file cần lưu ý hàm onload
    window.onload = ()=>{
        document.getElementById("idMainContainer").innerHTML = str;
    }

    //<body onload="handleOnload()">
    function handleOnload(){
        document.getElementById("idMainContainer").innerHTML = str;
    }
 */

function handleBtnAddClick(){
    let txtName = document.getElementById("idTxtNameAdd").value;
    students.push(txtName);

    renderStudents();

}

function handleEditClick(element){
    console.log(element.id);
    // "studentIcon3"
    idStudentEdit = element.id.substring(11,element.id.length );

    let txtName = document.getElementById("studentName" + idStudentEdit).innerText;
    document.getElementById("idTxtNameEdit").value = txtName;
    
    document.getElementById("frmAdd").style.display = "none";
    document.getElementById("frmEdit").style.display = "block";

}

function handleBtnEditClick(){
    let txtEdit = document.getElementById("idTxtNameEdit").value;
    students[idStudentEdit-1] = txtEdit;
    renderStudents();
    document.getElementById("frmAdd").style.display = "block";
    document.getElementById("frmEdit").style.display = "none";
}

function handleDeleteClick(e){
    let idDelete = e.id.substring(14,e.id.length);
    console.log(idDelete);
    students.splice(idDelete-1, 1);
    renderStudents();

}


