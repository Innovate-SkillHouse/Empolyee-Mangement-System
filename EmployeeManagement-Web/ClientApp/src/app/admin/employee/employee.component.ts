import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpolyeeService } from './empolyee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empolyeedata: any = [];
  employeeAddForm!: FormGroup;
  constructor(private empolyeeService: EmpolyeeService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

debugger
    this.employeeAddForm = this.formBuilder.group({
      id:[""],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
      phone: ["",[Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]],
      dateCreated: ["", Validators.required],
      dateModified: ["", Validators.required],
      companyId: ["", [Validators.required,Validators.pattern("^[0-9]*$")]]
    });
    this.getAllEmpolyee();
  
  }
  getAllEmpolyee() {
    this.empolyeeService.getAllEmploye().subscribe((data) => {
      debugger
      this.empolyeedata = data;
    })
  }
  Submit() {
    debugger
    if (this.employeeAddForm.invalid)
      return;
    if(this.employeeAddForm.value.id==null)
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
  onDelete(id: number) {
    this.empolyeeService.deleteEmpolyeeById(id).subscribe(data => {
      this.getAllEmpolyee();
    })

  }
  onEdit(id: number) {
    this.empolyeeService.getEmpolyeeById(id).subscribe(data => {
      debugger
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
    this.employeeAddForm.value.companyId==''
  }
  get val(){
    return this.employeeAddForm.controls;
  }
}
