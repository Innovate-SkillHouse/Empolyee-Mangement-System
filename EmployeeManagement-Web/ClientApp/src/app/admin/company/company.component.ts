import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})  
export class CompanyComponent implements OnInit {
  companydata: any = [];
  companyAddForm!: FormGroup;
  SearchText="";
  constructor(private companyService: CompanyService, private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.SearchText="";
    this.companyAddForm = this.formBuilder.group({
      companyId:[''],
      companyName: ["", Validators.required],
      companyAddress: ["", Validators.required],
      companyPhone: ["", Validators.required],
      
    });
    this.GetAllCompanies();
  }
  GetAllCompanies() {
    this.companyService.GetAllCompany().subscribe((data)=>{
      
      this.companydata=data;
    })
  }
  Submit() {
   
    if(this.companyAddForm.invalid)
    return;
    
    if(this.companyAddForm.value.companyId==null||this.companyAddForm.value.companyId==''){
      
      var comaddmodel = {
        
        companyName: this.companyAddForm.value.companyName,
        companyAddress: this.companyAddForm.value.companyAddress,
        companyPhone: this.companyAddForm.value.companyPhone
      }
      this.companyService.saveCompany(comaddmodel).subscribe((data) => {
        this.GetAllCompanies();
        this.resetForm();
      })
    }
    else{
      var cmpUpdatemodel={
        companyId:this.companyAddForm.value.companyId,
        companyName:this.companyAddForm.value.companyName,
        companyAddress:this.companyAddForm.value.companyAddress,
        companyPhone:this.companyAddForm.value.companyPhone
      }
      this.companyService.updateCompany(cmpUpdatemodel).subscribe(data=>{
        this.GetAllCompanies();
        this.resetForm();
      })
    }
  }
  searchByName(){
    if(this.SearchText!=""){
    this.companydata=this.companydata.filter((x:any)=>x.companyName==this.SearchText);
  }
  else{
    this.GetAllCompanies();
  }
  }
  onDelete(companyId:number){
    this.companyService.deleteCompany(companyId).subscribe(data=>{
      this.GetAllCompanies();
    })
  }
  onEdit(companyId:number){
    this.companyService.getCompanyById(companyId).subscribe(data=>{
      
      this.companyAddForm.patchValue(data);
    })
  }
  resetForm(){
    this.companyAddForm.value.companyId=''
    this.companyAddForm.value.companyName=''
    this.companyAddForm.value.companyAddress=''
    this.companyAddForm.value.companyPhone=''
  }
}
