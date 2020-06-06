import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {

    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }
}
