import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('Validar serviço de autenticação', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });
 
  it('Usuário e senha válidos', inject([LoginService], (service: LoginService) => {
    expect(service.auth('us', 'SP')).toBeTruthy();
  }))});

// describe('LoginService', () => {
//   let service: LoginService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
