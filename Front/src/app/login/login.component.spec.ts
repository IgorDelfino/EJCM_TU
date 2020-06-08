import { LoginComponent } from './login.component';
import { FormBuilder } from "@angular/forms";


describe('LoginComponent', () => { 

  let loginComponent: LoginComponent;
 
  beforeEach(() => {

  loginComponent = new LoginComponent(new FormBuilder);
 
  })

 
  it('Deve verificar se contém os itens no form', () => {
 
    expect(loginComponent.loginForm.contains('password')).toBeTruthy();
    expect(loginComponent.loginForm.contains('email')).toBeTruthy();
  
  })

  it('Deve usar senha com no mínimo 6 dígitos', () => {

    let passwordControl = loginComponent.loginForm.get('password');
   
    passwordControl.setValue('123456');
   
    expect(passwordControl.valid).toBeTruthy();
   
  })

  it('Deve validar o email inserido no input', () => {

    let emailControl = loginComponent.loginForm.get('email');
   
    emailControl.setValue('teste@email.com');
   
    expect(emailControl.valid).toBeTruthy();
  })
});



//------------------------------------------------------------------ DOC

//  const func1 = function(param1){
//    //se eu colocar um this aqui dentro eu vou estar referenciando esta function
//  }

//  //quando eu faço this dentro de uma arrow function eu to referenciando o contexto externo (contexto global)

