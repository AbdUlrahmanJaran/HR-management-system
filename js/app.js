'use strict';

// let employees =[];
let autoEmployees =[];
let form = document.getElementById("dataForm");
let mainDiv = document.getElementById("mainDiv");
let add =  document.getElementById("submit");
let employeeIdstart  = 1000 ;

function AutoEmployee ( fullName, department, level, image){
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
function generateId(){
    return employeeIdstart++;
  }
AutoEmployee.prototype.getId = function(){
    this.employeeId = generateId()
      
  }
  
AutoEmployee.prototype.SalaryGenerator = function(){
    for(let i=0; i<autoEmployees.length; i++){
    autoEmployees[i].salary = autoEmployees[i].getSalary() - autoEmployees[i].getSalary()*0.075; 
    }
}


let ghaziSamer = new AutoEmployee("Gazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lanaAli = new AutoEmployee("Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamaraAyoub = new AutoEmployee("Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safiWalid= new AutoEmployee("Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omarZaid = new AutoEmployee("Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let ranaSaleh = new AutoEmployee("Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadiAhmad = new AutoEmployee("Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

function saveEmployee (){
    let saveformat = JSON.stringify(autoEmployees);
    localStorage.setItem("emploeey",saveformat)
  }

  function getData(){
    let emploeey = localStorage.getItem("emploeey")
    let parseemploeey = JSON.parse(emploeey);
    autoEmployees = []
    if (parseemploeey !== null){
      
      for (let i = 0 ; i < parseemploeey.length ; i++ ){
        new AutoEmployee(parseemploeey[i].fullName, parseemploeey[i].department, parseemploeey[i].level, parseemploeey[i].image);
      }
    }
    render();
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let name = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let newEmployee = new AutoEmployee( name, department, level, image);
    form.reset();
    newEmployee.SalaryGenerator();
    newEmployee.getId();
    newEmployee.showEmployee();
    saveEmployee();
}

AutoEmployee.prototype.showEmployee =function()
{

let divShow = document.createElement("div");
divShow.setAttribute('class',"Show");

let imgShow = document.createElement("img");
imgShow.setAttribute("src",this.image);
divShow.appendChild(imgShow); 
    
let title = document.createElement("h4");
title.textContent="Name :"+this.fullName;
divShow.appendChild(title);
     
let titleId = document.createElement("h4");
titleId.textContent="ID :"+this.employeeId;
divShow.appendChild(titleId);
     
let titleDeb = document.createElement("h4");
titleDeb.textContent="Department :"+this.department;
divShow.appendChild(titleDeb);
     
let titleLevel = document.createElement("h4");
titleLevel.textContent="level :"+this.level;
divShow.appendChild(titleLevel);

let salary = document.createElement("h4");
salary.textContent = `salary : ${this.salary}$`;
divShow.appendChild(salary);

mainDiv.appendChild(divShow);
}
function render(){
    for (let i = 0 ; i < autoEmployees.length ; i++ ){
        autoEmployees[i].getId();
        autoEmployees[i].SalaryGenerator();
        autoEmployees[i].showEmployee();
      }
    }
    render();
    getData();

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
     
//      else if(this.level == "Mid-Senior")
//          return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
     
//      else if(this.level == "Junior")
//          return Math.floor(Math.random() * (1000 - 500) ) + 500;
     
//      else
//      return 0;
//  }

//   let ghaziSamer = new Employee(1000, "Gazi Samer", "Administration", "Senior", "URL");
//   let lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior", "URL");
//   let tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "URL");
//   let safiWalid= new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "URL");
//   let omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "URL");
//   let ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "URL");
//   let hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "URL");

// for(let i=0; i<employees.length; i++){
//       //salary= net Salary
//     employees[i].salary = employees[i].getSalary() - employees[i].getSalary()*0.075;
// }

// Employee.prototype.render = function(){
//     document.write(`<h3>Employee Name: ${this.fullName} || Employee Salary: ${this.salary}</h3>`);
// }

// console.log(employees);

// for(let i=0; i<employees.length; i++){
//     employees[i].render();  
// }