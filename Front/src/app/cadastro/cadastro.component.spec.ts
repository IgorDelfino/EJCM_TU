
import { async } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { validUser, blankUser } from '../mocks';
import { CadastroService } from './service/cadastro.service';


const routerSpy = jest.spyOn(Router, 'navigateByUrl', "get");
const CadastroServiceSpy = jest.spyOn('CadastroService', 'cadastro');


describe('Login Component Isolated Test', () => {
  let component: CadastroComponent;

  beforeEach(async(() => {
    component = new CadastroComponent(routerSpy, new FormBuilder(), CadastroServiceSpy);
  }));

  function updateForm(userEmail, userPassword) {
    component.registerForm.controls['name'].setValue(name);
    component.registerForm.controls['email'].setValue(userEmail);
    component.registerForm.controls['password'].setValue(userPassword);
  }

  it('Component successfully created', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.invalid).toBeTruthy();
    expect(component.authError).toBeFalsy();
    expect(component.authErrorMsg).toBeUndefined();
  });

  it('submitted should be true when onSubmit()', () => {
    component.onSubmit(blankUser);
    expect(component.submitted).toBeTruthy();
    expect(component.authError).toBeFalsy();
  });

  it('form value should update from when u change the input', (() => {
    updateForm(validUser.name, validUser.password);
    expect(component.registerForm.value).toEqual(validUser);
  }));

  it('Form invalid should be true when form is invalid', (() => {
    updateForm(blankUser.name, blankUser.password);
    expect(component.registerForm.invalid).toBeTruthy();
  }));
});