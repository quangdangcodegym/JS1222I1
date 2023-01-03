let str = "<table>";
for(let i=1;i<=3;i++){
    str += "<tr>"
    for(let j=1;j<=3;j++){
        str += "<td>";
        str += i*j;
        str += "</td>";
    }
    str += "</tr>"
}
str += "</table>";
document.write(str);