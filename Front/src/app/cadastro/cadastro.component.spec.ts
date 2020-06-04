import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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