import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private api:ApiService,private addRouter:Router ) { }


  loginForm = this.fb.group({
    email: ['',[ Validators.required, Validators.email]],
    password: ['',[ Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  login(){
    

const email = this.loginForm.value.email
const password = this.loginForm.value.password

const user = {email,password}

this.api.loginApi(user).subscribe({
  next:(res:any)=>{
console.log(res);
alert('Login Successfully')
sessionStorage.setItem("username",res.existingUser.username)
sessionStorage.setItem("token",res.token)
this.addRouter.navigateByUrl('')

  },
  error:(err:any)=>{
    console.log(err);

    alert(err.error)
    
  }
})



  }
}
