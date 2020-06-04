import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { FormBuilder } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';

describe('LoginFormComponent', () => { 

  let component: CadastroComponent;
 
  beforeEach(() => {
 
  component = new CadastroComponent(new FormBuilder);
 
  })
 
  it('should create a form with 3 controls', () => {
 
  expect(component.registerForm.contains('name')).toBe(true);
  expect(component.registerForm.contains('password')).toBeTruthy();
  expect(component.registerForm.contains('email')).toBeTruthy();
 
  })

  it('should make the name control required', () => {

    let nameControl = component.registerForm.get('name');
   
    nameControl.setValue('');
   
    expect(nameControl.valid).toBeFalsy();
   
    })
   
    it('should use password with minimum 8 characters', () => {
   
    let passwordControl = component.registerForm.get('password');
   
    passwordControl.setValue('12345678')
   
    expect(passwordControl.valid).toBeTruthy();
   
    })
   
    it('should validate the email input type', () => {
   
    let emailControl = component.registerForm.get('email');
   
    emailControl.setValue('dinanathj@gmail.com')
   
    expect(emailControl.valid).toBeTruthy();
   
    })
})

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CadastroComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CadastroComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
=======
import { FormBuilder } from "@angular/forms";

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
       
   
>>>>>>> ebf324d6655b3832467c9036f8df81c796a6d84a
