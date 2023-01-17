let items = ["Quang Dang", "Xuan Cuong", "Khoa Nguyen", "Ly Ly", "Minh Ngoc"];


function handleSearch(){
    let value = document.getElementById("txtSearch").value;

    let itemResults = [];
    // for(let i=0;i<items.length;i++){
    //     if(items[i].toUpperCase().includes(value.toUpperCase())){
    //         itemResults.push(items[i]);
    //     }
    // }
    itemResults = items.filter((item, index)=>{
        if(item.toUpperCase().includes(value.toUpperCase())){
            return true;
        }
    })
    renderMenu(itemResults);

}
function renderMenu(itemResults){
    // document.getElementById("menu-items").innerHTML = "";
    // for(let i=0;i<itemResults.length;i++){
    //     document.getElementById("menu-items").innerHTML += 
    //         `<li>${itemResults[i]}</li>`;

    // }
    // itemResults: ["Quang Dang", "Khoa Nguyen"]
    // .map: ["<li>Quang Dang</li>", "<li>Khoa Nguyen</li>"]
    let results = itemResults.map((item, index)=>{
        return `<li>${item}</li>`;
    })
    document.getElementById("menu-items").innerHTML = results.join("");
}