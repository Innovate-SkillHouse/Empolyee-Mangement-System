import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
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
        debugger
    }
    ngOnInit(): void {
       this.SearchText="";
        this.projectAddForm=this.formBuilder.group({
          projectId:[''],
            projectName:['',Validators.required],
            projectDescription:['',Validators.required],
            projectduration:['',Validators.required],
            
        });
        this.getAllProjects();
       
  }
  get m ()
  {
   return this.projectAddForm.controls;
  }
  get projectName(){return this.projectAddForm.get('projectName')}
  get projectDescription(){return this.projectAddForm.get('projectDescription')}
  get projectduration(){return this.projectAddForm.get('projectdurarion')}
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((data) => {
      debugger
      this.projectdata = data;
    })
  }
    Submit() {
        debugger
        if (this.projectAddForm.invalid)
          return;
       
         if(this.projectAddForm.value.projectId==null||this.projectAddForm.value.projectId=="")
          {
            var projectaddmodel = {
              projectName: this.projectAddForm.value.projectName,
              projectDescription: this.projectAddForm.value.projectDescription,
              projectDuration: this.projectAddForm.value.projectduration,
            }
          this.projectService.saveProject(projectaddmodel).subscribe((data) => {
            this.getAllProjects();
            this.resetForm();
          })
        }
        else{
          
            var prjUpdatemodel = {
            projectId:this.projectAddForm.value.projectId,
              projectName: this.projectAddForm.value.projectName,
              projectDescription: this.projectAddForm.value.projectDescription,
              projectDuration: this.projectAddForm.value.projectduration,
          }
           this.projectService.updateProject(prjUpdatemodel).subscribe(data=>{
            this.getAllProjects();
            this.resetForm();
          })
        }
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
            debugger
            
            this.projectAddForm.patchValue(data);
      
          })
        }
        resetForm(){
         this.projectAddForm.value.projectId=''
          this.projectAddForm.value.projectName=''
          this.projectAddForm.value.projectDescription=''
          this.projectAddForm.value.projectduration=''
        }


         onDelete(id: number) {
          this.projectService.deleteProjectById(id).subscribe(data => {
            this.getAllProjects();
          })
        
}
   
}