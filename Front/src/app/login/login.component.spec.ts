import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from "@angular/forms";

describe('LoginComponent', () => { 

  let loginComponent: LoginComponent;
 
  beforeEach(() => {
 
  loginComponent = new LoginComponent(new FormBuilder);
 
  })
 
  it('Deve criar um form com 2 controles', () => {
 
  expect(loginComponent.loginForm.contains('password')).toBeTruthy();
  expect(loginComponent.loginForm.contains('email')).toBeTruthy();
 
  })

  it('Deve usar senha com no mínimo 6 dígitos', () => {

    let passwordControl = loginComponent.loginForm.get('password');
   
    passwordControl.setValue('123456')
   
    expect(passwordControl.valid).toBeTruthy();
   
  })

  it('Deve validar o email inserido no input', () => {

    let emailControl = loginComponent.loginForm.get('email');
   
    emailControl.setValue('tef@tef')
   
    expect(emailControl.valid).toBeTruthy();
  })});


// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// })});
