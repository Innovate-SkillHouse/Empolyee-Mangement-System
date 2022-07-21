import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
   
    projectdata!: any[];
    projectAddForm!: FormGroup;
   SearchText="";
    constructor(private projectService:ProjectService,private formBuilder: FormBuilder){
  
    }
    ngOnInit(): void {
       this.SearchText="";
        this.projectAddForm=this.formBuilder.group({
          projectId:[""],
            projectName:["",Validators.required],
            projectDescription:["",Validators.required],
            projectDuration:["",Validators.required],
            
        });
        this.getAllProjects();
  }
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((data) => {
     
      this.projectdata = data;
    })
  }
    Submit() {
       
        if (this.projectAddForm.invalid)
          return;
         if(this.projectAddForm.value.id==null)
          {
            var projectaddmodel = {
              projectName: this.projectAddForm.value.projectName,
              projectDescription: this.projectAddForm.value.projectDescription,
              projectduration: this.projectAddForm.value.projectDuration,
            }
          this.projectService.saveProject(projectaddmodel).subscribe((data) => {
            this.getAllProjects();
          })
        }else{
          var projectupdatemodel={
            projectId:this.projectAddForm.value.projectId,
            projectName:this.projectAddForm.value.projectName,
            projectDescription:this.projectAddForm.value.projectDescription,
            projectDuration:this.projectAddForm.value.projectDuration,
          }
          this.projectService.updateProject(projectupdatemodel).subscribe(data=>{
            this.getAllProjects();
            this.resetForm();
          })
        }
      }
        onDelete(projectId: number) {
          this.projectService.deleteProjectById(projectId).subscribe(data => {
            this.getAllProjects();
          })
      
        }  
        searchByName(){
          if(this.SearchText!=""){
            this.projectdata=this.projectdata.filter((x:any)=>x.projectName==this.SearchText);
          }
          else{
            this.getAllProjects();

            }
        }  
        onEdit(id: number) {
          this.projectService.getProjectById(id).subscribe(data => {
       
            
            this.projectAddForm.patchValue(data);
      
          })
        }
        resetForm(){
         this.projectAddForm.value.projectId=''
          this.projectAddForm.value.projectName=''
          this.projectAddForm.value.projectDescription=''
          this.projectAddForm.value.projectDuration=''
        }


}
   

