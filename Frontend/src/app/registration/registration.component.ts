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
  loginValidation = '';
  registerValidation = '';

  get formControlsLogin() { return this.loginForm.controls; }
  get formControlsRegister() { return this.registerForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((result: any) => {
      if(result.includes('OK')){
        this.authService.name = this.loginForm.value.nick;
        this.router.navigateByUrl('/home');
      }
      else{
        this.loginValidation = result;
      }
      console.log(result);
    }
    );
  }

  register() {
    this.isSubmittedReg = true;
    if(this.registerForm.invalid){
      return;
    }
    this.authService.register(this.registerForm.value).subscribe((result: any) => {
      if(result.includes('OK')){
      this.authService.name = this.registerForm.value.nick;
      this.router.navigateByUrl('/home');
    }
    else{
      this.registerValidation = result;
    }
    console.log(result);
    });
  }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      nick: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm  =  this.formBuilder.group({
      nick: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
