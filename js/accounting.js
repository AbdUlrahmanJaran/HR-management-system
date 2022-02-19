'use strict';

let tabel = document.getElementById("table");


function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    
    let thName = document.createElement("th");
    thName.textContent = "Department Name";
    tr.appendChild(thName);
    
    thEmp = document.createElement("th");
    thEmp.textContent = "# of Emploees";
    tr.appendChild(thEmp);
   
    thSal = document.createElement("th");
    thSal.textContent = "Total salary";
    tr.appendChild(thSal);
    
    thAvg = document.createElement("th");
    thAvg.textContent = "Average salary";
    tr.appendChild(thAvg);


}

function renderTabelBody (){
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let tdA = document.createElement("td");
    tdA.textContent = "Administration";
    tr.appendChild(tdA);

    let tdN=document.createElement("td");
    tdN.textContent=calculateNumberOfDepartment("Administration");
    tr.appendChild(tdN);
    
    let td2=document.createElement("td");
    td2.textContent=calculateTotalSalary("Administration");
    tr.appendChild(td2);
   
    let td3=document.createElement("td");
    td3.textContent=calculateTotalSalary("Administration")/calculateNumberOfDepartment("Administration");
    tr.appendChild(td3);

}
renderHeader()