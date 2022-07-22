import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdata: any = [];
  userAddForm!: FormGroup;
  constructor(private signupService: SignupService, private formBuilder: FormBuilder) {
  }
  

  ngOnInit(): void {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      userEmail: ["",[Validators.required,Validators.email]],
      password: ["", [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$")]],
      
      
    });
  }
  get m() {
    return this.userAddForm.controls;
  }
  Submit() {
      var useraddmodel = {
        firstName: this.userAddForm.value.firstName,
        userEmail: this.userAddForm.value.userEmail,
        password: this.userAddForm.value.password,
        roleId:1
        
      }
      this.signupService.saveUser(useraddmodel).subscribe((data) => {
        debugger
        this.userdata=data;
      })
    }
   
  }