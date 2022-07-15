import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empdata:any=[];
  EmpAddform!: FormGroup;
  constructor(private employeeService:EmployeeService,private formBuilder: FormBuilder) {
    debugger
   }
ngOnInit(): void {
    this.getAllEmployee();
  }
getAllEmployee(){
  this.EmpAddform = this.formBuilder.group({
    id:[""],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    gender: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    dateCreated: ["", Validators.required],
    dateModified: ["", Validators.required],
    companyId: ["", Validators.required],
  });
    debugger
  
  this.employeeService.getAllEmployee().subscribe((data)=>{
    debugger
    this.empdata=data;
  })
}

 submit(){
  debugger
    if(this.EmpAddform.invalid)
    return;
    var empaddmodel={
    
      firstName: this.EmpAddform.value.firstName,
      lastName: this.EmpAddform.value.lastName,
      gender: this.EmpAddform.value.gender,
      email: this.EmpAddform.value.email,
      phone: this.EmpAddform.value.phone,
      dateCreated: this.EmpAddform.value.dateCreated,
      dateModified: this.EmpAddform.value.dateModified,
      companyId: this.EmpAddform.value.companyId,
    }
debugger
    if(this.EmpAddform.value.id==null){
      this.employeeService.saveEmployee(empaddmodel).subscribe((data)=>{
        debugger
        this.getAllEmployee();
        this.EmpAddform.reset();
      })
    }
    else{
      var empUpdatemodel={
    Id:this.EmpAddform.value.id,
        firstName: this.EmpAddform.value.firstName,
        lastName: this.EmpAddform.value.lastName,
        gender: this.EmpAddform.value.gender,
        email: this.EmpAddform.value.email,
        phone: this.EmpAddform.value.phone,
        dateCreated: this.EmpAddform.value.dateCreated,
        dateModified: this.EmpAddform.value.dateModified,
        companyId: this.EmpAddform.value.companyId,
      }
      this.employeeService.updateEmployee(empaddmodel).subscribe((data)=>{
        debugger
        this.getAllEmployee();
    })
  } 
 }
  onDelete(id:number){
    alert(id);
    this.employeeService.deleteEmployeeById(id).subscribe(data=>{
      debugger
    })
    

  }
  onEdit(id:number){
    alert(id);
    this.employeeService.getEmployeeById(id).subscribe(data=>{
      this.EmpAddform.patchValue(data);
      debugger
    })
  }
}





