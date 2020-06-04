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
    expect(cadastroComponent.registerForm.contains('password')).toBeTruthy();
    expect(cadastroComponent.registerForm.contains('email')).toBeTruthy();
   
    })

  it('should make the name control required', () => {

    let nameControl = cadastroComponent.registerForm.get('name');
   
    nameControl.setValue('');
     
    expect(nameControl.valid).toBeFalsy();
     
    })

  it('should use password with minimum 8 characters', () => {

    let passwordControl = cadastroComponent.registerForm.get('password');
       
    passwordControl.setValue('12345678')
       
    expect(passwordControl.valid).toBeTruthy();
       
    })
       
  it('should validate the email input type', () => {
       
    let emailControl = cadastroComponent.registerForm.get('email');
       
    emailControl.setValue('dinanathj@gmail.com')
       
    expect(emailControl.valid).toBeTruthy();
       
})});
       
   
