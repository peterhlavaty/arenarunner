import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  loginForm: FormGroup;
  registerForm: FormGroup;
  isSubmitted  =  false;
  isSubmittedReg = false;

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  register() {
    this.isSubmittedReg = true;
    this.authService.register(this.registerForm.value);
  }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm  =  this.formBuilder.group({
      nick: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
