import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeAddForm!: FormGroup;
  employeedata:any=[];
  constructor(private employeeService:EmployeeService,private formBuilder:FormBuilder) { 
    
  }
  

  ngOnInit(): void {
    this.GetAllEmployee();
  }
  GetAllEmployee(){
    this.employeeAddForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      dateCreated: ["", Validators.required],
      dateModified: ["", Validators.required],
      companyId: ["", Validators.required],
    });
   this.employeeService.getAllEmployee().subscribe((data)=>{
    this.employeedata=data;
   })
  
  }
  Submit(){
    debugger
    if(this.employeeAddForm.invalid)
    return;
    
    var empaddmodel={
      firstName:this.employeeAddForm.value.firstName,
      lastName: this.employeeAddForm.value.lastName,
      gender: this.employeeAddForm.value.gender,
      email: this.employeeAddForm.value.email,
      phone: this.employeeAddForm.value.phone,
      dateCreated: this.employeeAddForm.value.dateCreated,
      dateModified:this.employeeAddForm.value.dateModified,
      companyId: this.employeeAddForm.value.companyId
    }

  
    this.employeeService.saveEmployee(empaddmodel).subscribe((data)=>{
      
      this.GetAllEmployee();
    })
    
  }
  
  //ngOnInit():void{
    
      
 // }
}