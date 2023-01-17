function Request(id, requestOn, accessFor, team, status){
    this.id = id;
    this.ticketId = "UP - " + this.id;
    this.requestOn = requestOn;
    this.accessFor = accessFor;
    this.team = team;
    this.status = status;
}

let requests = [
];

function renderRequest(){
    let str = "";
    for(let i= 0;i<requests.length;i++){
        let tdAction = "";
        if(requests[i].status == "Pending"){
            tdAction = `
                    <button class="btn btn-success" onclick="handleApproved(${requests[i].id})">Approved</button>
                    <button class="btn btn-danger" onclick ="handleReject(${requests[i].id})">Reject</button>
                    `
        }
        str += `
        <tr>
            <td>${requests[i].id}</td>
            <td>${requests[i].ticketId}</td>
            <td>${requests[i].requestOn}</td>
            <td>${requests[i].accessFor}</td>
            <td>${requests[i].team}</td>
            <td>${requests[i].status}</td>
            <td>
                ${tdAction}
            </td>
        </tr>
        `;
    }
    document.getElementById("tb-request").innerHTML = str;
}

renderRequest();

function handleCreate(){
    let requestOn = document.getElementById("requestOn").value;
    let accessFor = document.getElementById("accessFor").value;
    let team = document.getElementById("team").value;

    if(requestOn == "" || accessFor =="" || team == ""){
        alert("Nhập thông tin chưa chính xác")
    }else{
        console.log(requestOn + " " + accessFor + " " + team);

        let requestIdMax = findMaxRequestId();
        let id;
        if(requestIdMax==null){
            id = 1;
        }else{
            id = requestIdMax.id + 1;
        }
        let newRequest = new Request(id, 
            requestOn, accessFor, team, "Pending"
            )
            requests.push(newRequest);
        renderRequest();

    }
}
function findMaxRequestId(){
    if(requests.length == 0){
        return null;
    }else{
        let indexMax = 0;
        let idMax = requests[0].id;
        for(let i=1;i<requests.length;i++){
            if(requests[i].id > idMax){
                idMax = requests[i].id;
                indexMax = i;
            }
        }
        return requests[indexMax];
    }
}
function updateRequestById(requestId, status){
    for(let i=0;i<requests.length;i++){
        if(requests[i].id==requestId){
            requests[i].status = status;
        }
    }
    return null;
}
function handleApproved(requestId){
    let check = confirm("Are you sure Approve id " + requestId);
    if(check==true){
        updateRequestById(requestId, "Approved");
        renderRequest();
    }
}
function handleReject(requestId){
    let check = confirm("Are you sure Reject id " + requestId);
    if(check==true){
        updateRequestById(requestId, "Reject");
        renderRequest();
    }
}