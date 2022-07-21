import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { EmpolyeeService } from './empolyee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empolyeedata: any = [];
  companydata:any=[];
  employeeAddForm!: FormGroup;
  SearchText="";
  constructor(private empolyeeService: EmpolyeeService, private formBuilder: FormBuilder, private companyService :CompanyService) {
  }

  ngOnInit(): void {

    this.SearchText="";
    this.employeeAddForm = this.formBuilder.group({
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
    this.getAllEmpolyee();
    this.getAllCompany();
  }
  getAllCompany(){
    this.companyService.GetAllCompany().subscribe((data)=>{
      this.companydata=data;
    })
  }
  getAllEmpolyee() {
    this.empolyeeService.getAllEmploye().subscribe((data) => {
    
      this.empolyeedata = data;
    })
  }
  Submit() {

    if (this.employeeAddForm.invalid)
      return;

   

    if(this.employeeAddForm.value.id==null||this.employeeAddForm.value.id=="")
    {
      var empaddmodel = {
        firstName: this.employeeAddForm.value.firstName,
        lastName: this.employeeAddForm.value.lastName,
        gender: this.employeeAddForm.value.gender,
        email: this.employeeAddForm.value.email,
        phone: this.employeeAddForm.value.phone,
        dateCreated: this.employeeAddForm.value.dateCreated,
        dateModified: this.employeeAddForm.value.dateModified,
        companyId: this.employeeAddForm.value.companyId
      }
      this.empolyeeService.saveEmployee(empaddmodel).subscribe((data) => {
        this.getAllEmpolyee();
        this.resetForm();
      })
    }
    else{
      var empUpdatemodel = {
        
        Id:this.employeeAddForm.value.id,
        firstName: this.employeeAddForm.value.firstName,
        lastName: this.employeeAddForm.value.lastName,
        gender: this.employeeAddForm.value.gender,
        email: this.employeeAddForm.value.email,
        phone: this.employeeAddForm.value.phone,
        dateCreated: this.employeeAddForm.value.dateCreated,
        dateModified: this.employeeAddForm.value.dateModified,
        companyId: this.employeeAddForm.value.companyId
      }
      
     this.empolyeeService.updateEmpolyee(empUpdatemodel).subscribe(data=>{
      this.getAllEmpolyee();
      
      this.resetForm();
     })
    }
  }
    searchByName(){
      if(this.SearchText!=""){
      this.empolyeedata=this.empolyeedata.filter((x:any)=>x.firstName==this.SearchText);
      }
      else{
        this.getAllEmpolyee();
      }
    }

    

  }
  onDelete(id: number) {
    this.empolyeeService.deleteEmpolyeeById(id).subscribe(data => {
      this.getAllEmpolyee();
    })

  }
  onEdit(id: number) {
    this.empolyeeService.getEmpolyeeById(id).subscribe(data => {
      
      
      this.employeeAddForm.patchValue(data);

    })
  }
  resetForm(){
   this.employeeAddForm.value.id=''
    this.employeeAddForm.value.firstName=''
    this.employeeAddForm.value.lastName=''
    this.employeeAddForm.value.gender=''
    this.employeeAddForm.value.email=''
    this.employeeAddForm.value.phone=''
    this.employeeAddForm.value.dateCreated=''
     this.employeeAddForm.value.dateModified=''
    this.employeeAddForm.value.companyId=''
  }
}
