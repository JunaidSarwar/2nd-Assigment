var sno=0;
//function show (){  a=document.getElementById("form");    a.style.display="Block"}
function show2(){
var a;
var tableData=[];
var table;
sno +=1;
    a=document.getElementById('studentdiv');
tableData=[document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td")];
var tableRow = document.createElement('tr');
table=document.getElementById("student");
table.appendChild(tableRow);
tableRow.appendChild(tableData[0]);
tableRow.appendChild(tableData[1]);
tableRow.appendChild(tableData[2]);
tableRow.appendChild(tableData[3]);
tableRow.appendChild(tableData[4]);
tableRow.appendChild(tableData[5]);
tableRow.appendChild(tableData[6]);
tableRow.appendChild(tableData[7]);
tableData[0].innerHTML=sno;
tableData[1].innerHTML=document.getElementById('n').value;
tableData[2].innerHTML=Number(document.getElementById('a').value);
tableData[3].innerHTML=Number(document.getElementById('N').value);
tableData[4].innerHTML=Number(document.getElementById('D').value);
tableData[5].innerHTML=Number(document.getElementById('AI').value);
tableData[6].innerHTML=Number(document.getElementById('J').value);
 var per : number =[Number(document.getElementById('N').value) + Number(document.getElementById('D').value) + Number(document.getElementById('AI').value)+Number(document.getElementById('J').value)]/400;
per=per*100;
tableData[7].innerHTML=per + "%";
}