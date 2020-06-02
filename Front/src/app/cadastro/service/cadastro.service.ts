import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cadastro } from './cadastro'

export interface UserRegisterBody {
  name: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = environment.apiEndpoint;
  isRegistered = false;

  constructor(
    private http: HttpClient
  ) {}

  getIsRegister() {
    return this.isRegistered;
  }

  register(userregisterBody: UserRegisterBody): Promise<any> {
    const path = '/admin/validateUser';
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + path, userregisterBody)
        .toPromise()
        .then((res: BaseResponse) => {
          resolve();
        }).catch((err) => {
          reject(err.error.message);
        });
    });
  }

}

export interface BaseResponse {
  code: string;
  message: string;
}