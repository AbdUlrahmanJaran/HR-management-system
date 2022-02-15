'use strict';

//  let employees =[];
let autoEmployees =[];
let form = document.getElementById("dataForm")


//  function Employee (employeeId, fullName, department, level, image, salary){
//      this.employeeId= employeeId;
//      this.fullName= fullName;
//      this.department= department;
//      this.level= level;
//      this.salary= 0;
//      employees.push(this)
//  }
//  Employee.prototype.getSalary = function(){
//      if(this.level == "Senior")
//          return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
//      
//      else if(this.level == "Mid-Senior")
//          return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
//      
//      else if(this.level == "Junior")
//          return Math.floor(Math.random() * (1000 - 500) ) + 500;
//      
//      else
//      return 0;
//  }

function AutoEmployee (employeeId, fullName,administration, marketing, development, finance, junior, midSenior, senior , image, salary){
    this.employeeId= employeeId;
    this.fullName= fullName;
    this.department= department;
    this.level= level;
    this.image= image;
    this.salary= 0;
    autoEmployees.push(this)
}
//Id generator
AutoEmployee.prototype.generateId = function(){
    for (let i = 0; i < autoEmployees.length; i++) {
        autoEmployees[i].employeeId = 1000 + i;
    }
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
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let employeeId= this.generateId;
    let name = event.target.fullName.value;
    let administration = event.target.administration.checked;
    let marketing = event.target.marketing.checked;
    let development = event.target.development.checked;
    let finance = event.target.finance.checked;
    let junior = event.target.junior.checked;
    let midSenior = event.target.midSenior.checked;
    let senior = event.target.senior.checked;
    let image = event.target.image.value;

    let newEmployee = new AutoEmployee(employeeId, name, administration, marketing, development, finance, junior, midSenior, senior , image);
    console.log(newEmployee);
    //console.log(name, administration, marketing, development, finance, junior, midSenior, senior , image);
}


//   let ghaziSamer = new Employee(1000, "Gazi Samer", "Administration", "Senior", "URL");
//   let lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior", "URL");
//   let tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "URL");
//   let safiWalid= new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "URL");
//   let omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "URL");
//   let ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "URL");
//   let hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "URL");
// 
// for(let i=0; i<employees.length; i++){
//       //salary= net Salary
//     employees[i].salary = employees[i].getSalary() - employees[i].getSalary()*0.075;
// }
// 
// Employee.prototype.render = function(){
//     document.write(`<h3>Employee Name: ${this.fullName} || Employee Salary: ${this.salary}</h3>`);
// }

// console.log(employees);

// for(let i=0; i<employees.length; i++){
//     employees[i].render();  
// }