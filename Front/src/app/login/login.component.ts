import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public router:Router) {

    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }
 
  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

  vaiParaCadastro(){
    this.router.navigate(['/cadastro'])
  }
}
