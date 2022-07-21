import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { EmpolyeeService } from '../employee/empolyee.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm!: FormGroup;
  allProjectDetails: any = [];
  show: boolean=false;
  Submit: boolean=true;
  EditCheck: boolean=false;
  companyId: any;
  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,
    private empolyeeService: EmpolyeeService) { }


  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectname: ["", Validators.required],
      projectdescription: ["", Validators.required], 
    });
    this.getProjectDetails();
 
  }
  onSubmit(){
    debugger;
    if(this.EditCheck == false)
    {
    if (this.projectForm.invalid)
      return;
      const projectname = this.projectForm.value.projectname;
      const projectdescription = this.projectForm.value.projectdescription; 
      debugger
        this.authenticationService.SaveProject(projectname, projectdescription)
      .subscribe(
        (data : any) => {
          //this.router.navigate(["/admin"]);
          // if(confirm("Succefully Added Company Details") == true){
          //   this.clearForm();
          // }
          this.show = true;
        })
      }
       
  }
  getProjectDetails(){
    debugger
    this.authenticationService.getProjectDetails()
    .subscribe(
      (data : any) => {
        this.allProjectDetails = data;
      })
  }
  onDelete(id: number) {
    this.empolyeeService.deleteEmpolyeeById(id).subscribe(data => {
      this.getProjectDetails();
    })

  }
  edit(id: number) {
    this.empolyeeService.getEmpolyeeById(id).subscribe(data => {
      debugger
      
      this.projectForm.patchValue(data);

    })
  }
  closePopup()
  {
    this.show = !this.show; 
  }


  }