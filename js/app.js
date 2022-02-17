'use strict';

let employees =[];
let autoEmployees =[];
let form = document.getElementById("dataForm")
let mainDiv = document.getElementById("mainDiv")
let add =  document.getElementById("submit")

function AutoEmployee (employeeId, fullName, department, level, image, salary){
    this.employeeId= 0;
    this.fullName= fullName;
    this.department= department;
    this.level= level;
    this.image= image;
    this.salary= 0;
    autoEmployees.push(this)
    

}
AutoEmployee.prototype.getSalary = function(){
    if(this.level == "Senior")
        return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
    
    else if(this.level == "Mid-Senior")
        return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    
    else if(this.level == "Junior")
        return Math.floor(Math.random() * (1000 - 500) ) + 500;
    
    else
    return 0;
}
//Id generator

AutoEmployee.prototype.idSalaryGenerator = function(){
    for(let i=0; i<autoEmployees.length; i++){
    autoEmployees[i].employeeId = 1001 + i;
    autoEmployees[i].salary = autoEmployees[i].getSalary() - autoEmployees[i].getSalary()*0.075; 
    }
}
AutoEmployee.prototype.renderall = function(){
    for (let i = 0; i < autoEmployees.length; i++) {
        autoEmployees[i].render();
    }
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let employeeId = 0;
    let name = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let salary = 0;
    let newEmployee = new AutoEmployee(employeeId, name, department, level, image, salary);
    form.reset();
    newEmployee.idSalaryGenerator();
    mainDiv.innerHTML= "";
    newEmployee.renderall();
}
AutoEmployee.prototype.render = function(){
    let mainDiv = document.getElementById("mainDiv");
    let img = document.createElement("img");
    img.setAttribute("src",`${this.image}`);
    let employeetag1 = document.createElement("h3")
    employeetag1.textContent = `Name: ${this.fullName} -ID: ${this.employeeId}`;
    let employeetag2 = document.createElement("h3")
    employeetag2.textContent = `Department: ${this.department} -Level: ${this.level}`;
    let employeetag3 = document.createElement("h3")
    employeetag3.textContent = `Salary: ${this.salary}`;
    mainDiv.appendChild(img);
    mainDiv.appendChild(employeetag1);
    mainDiv.appendChild(employeetag2);
    mainDiv.appendChild(employeetag3);
    
}

 function Employee (employeeId, fullName, department, level, image, salary){
     this.employeeId= employeeId;
     this.fullName= fullName;
     this.department= department;
     this.level= level;
     this.salary= 0;
     employees.push(this)
 }
 Employee.prototype.getSalary = function(){
     if(this.level == "Senior")
         return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
     
     else if(this.level == "Mid-Senior")
         return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
     
     else if(this.level == "Junior")
         return Math.floor(Math.random() * (1000 - 500) ) + 500;
     
     else
     return 0;
 }

  let ghaziSamer = new Employee(1000, "Gazi Samer", "Administration", "Senior", "URL");
  let lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior", "URL");
  let tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "URL");
  let safiWalid= new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "URL");
  let omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "URL");
  let ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "URL");
  let hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "URL");

for(let i=0; i<employees.length; i++){
      //salary= net Salary
    employees[i].salary = employees[i].getSalary() - employees[i].getSalary()*0.075;
}

Employee.prototype.render = function(){
    document.write(`<h3>Employee Name: ${this.fullName} || Employee Salary: ${this.salary}</h3>`);
}

console.log(employees);

for(let i=0; i<employees.length; i++){
    employees[i].render();  
}