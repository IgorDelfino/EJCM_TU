import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CadastroService } from './service/cadastro.service'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

registerForm: FormGroup;
submitted = false;
authError = false;
authErrorMsg: string;
userregisterBody;

constructor(
  
  private router: Router,
  private formbuilder: FormBuilder,
  private cadastroService: CadastroService
  ) {

  this.registerForm = this.formbuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });
 }

 ngOnInit() {}

 get f() {
   return this.registerForm.controls;
 }

 onSubmit(cadastroData) {
   this.submitted = true;
   if (this.registerForm.invalid) {
     return;
   }
   const usercadastroBody = {
     name: cadastroData.name,
     email: cadastroData.email,
     password: cadastroData.password
   };
   // Pending API call and logic handling
   this.cadastroService.register(this.userregisterBody)
     .then(() => {
       // Successfully login
       this.router.navigateByUrl('/home');
     })
     .catch((reason) => {
       // Failed login
       this.authError = true;
       this.authErrorMsg = reason;
     });
 }

}


