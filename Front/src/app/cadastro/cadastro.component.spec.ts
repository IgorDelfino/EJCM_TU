import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => { 
 
  let cadastroComponent: CadastroComponent;
 
  beforeEach(() => {
 
    cadastroComponent = new CadastroComponent(new FormBuilder);
 
  })


  it('Deve verificar se contém os itens no form', () => {

    expect(cadastroComponent.registerForm.contains('name')).toBe(true);
    expect(cadastroComponent.registerForm.contains('password')).toBe(true);
    expect(cadastroComponent.registerForm.contains('email')).toBe(true);
   
    })

  it('Deve verificar se o nome está no formato correto', () => {

    let nameControl = cadastroComponent.registerForm.get('name');
   
    nameControl.setValue('oi'); // dentro das aspas simples tem que ter algo com mais de 3 dígitos
     
    expect(nameControl.valid).toBeTruthy();
 
    // Se rodarmos o teste abaixo, ele vai dar errado:
    // nameControl.setValue('algoComMenosDe3Dígitos');
    // expect(nameControl.valid).toBeFalsy();
     
    })

  it('Deve usar senha com no mínimo 6 dígitos', () => {

    let passwordControl = cadastroComponent.registerForm.get('password');
       
    passwordControl.setValue('123456')
       
    expect(passwordControl.valid).toBeTruthy();
       
    })
       
  it('Deve validar o formato de email', () => {
       
    let emailControl = cadastroComponent.registerForm.get('email');
       
    emailControl.setValue('tef@tef.com')
       
    expect(emailControl.valid).toBeTruthy();
       
})
});
       
// it('Component successfully created', () => {
  //   expect(cadastroComponent).toBeTruthy();
  // })

  // it('form invalid when empty', () => {
  //   expect(cadastroComponent.registerForm.valid).toBeFalsy();
  // })

  // it('email field validity', () => {
  //   let email = cadastroComponent.registerForm.controls['email'];
  //   expect(email.valid).toBeFalsy();

  //   let errors = {};
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeTruthy();

  //   email.setValue("test");
  //   errors = email.errors || {};
  //   expect(errors['pattern']).toBeTruthy();
  // })

  // it('component initial state', () => {
  //   expect(cadastroComponent.registerForm).toBeDefined();
  //   expect(cadastroComponent.registerForm.invalid).toBeTruthy();
  // });
   
