'use strict';

let employees =[];

function employee (employeeId, fullName, department, level, image, salary){
    this.employeeId= employeeId;
    this.fullName= fullName;
    this.department= department;
    this.level= level;
    this.image= image;
    this.salary= salary;
    employees.push(this)
}
let salary = function(level){
    if(level== "Senior")
        return Math.floor(Math.random() * (2000 - 1500) ) + 1500;

    else if(level== "midSenior")
        return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        
    else
        return Math.floor(Math.random() * (1000 - 500) ) + 500;

}
  employee.prototype.render = function(){
      document.write(`<h1>Employee Name:${this.fullName}<br>Employee Salary:${this.salary}`)
  }
