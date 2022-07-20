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
      userEmail: ["", Validators.required],
      password: ["", Validators.required],
      
      
    });
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