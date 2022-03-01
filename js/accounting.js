'use strict';

let table = document.getElementById("table");
let employeesNum = JSON.parse(localStorage.getItem("employee"));
console.log(employeesNum);

function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    
    let thName = document.createElement("th");
    thName.textContent = "Department Name";
    tr.appendChild(thName);
    
    let thEmp = document.createElement("th");
    thEmp.textContent = "Employees";
    tr.appendChild(thEmp);
   
    let thSal = document.createElement("th");
    thSal.textContent = "Total salary";
    tr.appendChild(thSal);
    
    let thAvg = document.createElement("th");
    thAvg.textContent = "Average salary";
    tr.appendChild(thAvg);
}
renderHeader();

function renderTableBody (){
    let totalemp = 0; let totalSalary = 0; 
    let salaryD = 0; let empD = 0;
    let salaryA = 0; let empA = 0;
    let salaryF = 0; let empF = 0;
    let salaryM = 0; let empM = 0;

    for (let i = 0; i < employeesNum.length; i++) {
        if (employeesNum[i].department === "Development") {
            empD ++ ;
            totalemp ++ ;
            salaryD += employeesNum[i].salary;
            totalSalary  += employeesNum[i].salary;
        }
        else if (employeesNum[i].department === "Administration") {
            empA ++ ;
            totalemp ++ ;
            salaryA += employeesNum[i].salary;
            totalSalary  += employeesNum[i].salary;
        }
        else if (employeesNum[i].department === "Finance") {
            empF ++ ;
            totalemp ++ ;
            salaryF += employeesNum[i].salary;
            totalSalary  += employeesNum[i].salary;
        }
        else {
            empM ++ ;
            totalemp ++ ;
            salaryM += employeesNum[i].salary;
            totalSalary  += employeesNum[i].salary;
        }
    }

    let arr = ["Development",empD,salaryD,salaryD/empD];
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let i = 0; i < arr.length; i++) {
        let td1 = document.createElement("td");
        td1.textContent = `${arr[i]}`;
        tr.appendChild(td1);
    }

    let arr2 = ["Administration",empA,salaryA,salaryA/empA]
    let tr2 = document.createElement("tr");
    table.appendChild(tr2);
    for (let i = 0; i < arr.length; i++) {
        let td2 = document.createElement("td");
        td2.textContent = `${arr2[i]}`;
        tr2.appendChild(td2);
    }

    let arr3 = ["Finance",empF,salaryF,salaryF/empF];
    let tr3 = document.createElement("tr");
    table.appendChild(tr3);
    for (let i = 0; i < arr.length; i++) {
        let td3 = document.createElement("td");
        td3.textContent = `${arr3[i]}`;
        tr3.appendChild(td3);
    }

    let arr4 = ["Marketing",empM,salaryM,salaryM/empM]
    let tr4 = document.createElement("tr");
    table.appendChild(tr4);
    for (let i = 0; i < arr.length; i++) {
        let td4 = document.createElement("td");
        td4.textContent = `${arr4[i]}`;
        tr4.appendChild(td4);
    }

    let arrTotal = ["Total",totalemp,totalSalary,totalSalary/totalemp];
    let tr5 = document.createElement("tr");
    table.appendChild(tr5);
    for (let i = 0; i < arr.length; i++) {
        let td5 = document.createElement("td");
        td5.textContent = `${arrTotal[i]}`;
        tr5.appendChild(td5);
    }
}
renderTableBody();