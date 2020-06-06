import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => { 
 
  let cadastroComponent: CadastroComponent;
 
  beforeEach(() => {
 
    cadastroComponent = new CadastroComponent(new FormBuilder);
 
  })

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

  it('Deve verificar se contém os itens no form', () => {

    expect(cadastroComponent.registerForm.contains('name')).toBe(true);
    expect(cadastroComponent.registerForm.contains('password')).toBeTruthy();
    expect(cadastroComponent.registerForm.contains('email')).toBeTruthy();
   
    })

  it('should make the name control required', () => {

    let nameControl = cadastroComponent.registerForm.get('name');
   
    nameControl.setValue(''); // dentro das aspas simples tem que ter algo com menos de 3 dígitos
     
    expect(nameControl.valid).toBeFalsy();
 
    // Se rodarmos o teste abaixo, ele vai dar certo
    // nameControl.setValue('algoComMaisDe3Dígitos');
    // expect(nameControl.valid).toBeTruthy();
     
    })

  it('should use password with minimum 6 characters', () => {

    let passwordControl = cadastroComponent.registerForm.get('password');
       
    passwordControl.setValue('123456')
       
    expect(passwordControl.valid).toBeTruthy();
       
    })
       
  it('should validate the email input type', () => {
       
    let emailControl = cadastroComponent.registerForm.get('email');
       
    emailControl.setValue('tef@tef.com')
       
    expect(emailControl.valid).toBeTruthy();
       
})});
       
   