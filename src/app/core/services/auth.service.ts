import { Injectable } from '@angular/core';
import { User, LoginRsp, SignupRsp } from '../models/user';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(body: User): Observable<LoginRsp> {
    // return this.httpClient.post<LoginRsp>(`${environment.api_url}/users/login`, body);
    const loginRsp: LoginRsp = {
      success: true,
      token: '78hjhjhjj'
    };

    const loginObservable = new Observable<LoginRsp>(observer => {
      setTimeout(() => {
          observer.next(loginRsp);
       }, 1000);
    });

    return loginObservable;
  }
  signup(body: User): Observable<SignupRsp> {
    // return this.httpClient.post<SignupRsp>(`${environment.api_url}/users/signup`, body);
    const signupRsp: SignupRsp = {
      success: true,
      message: 'User successfully registered!'
    };

    const signUpObservable = new Observable<SignupRsp>(observer => {
      setTimeout(() => {
          observer.next(signupRsp);
       }, 1000);
    });

    return signUpObservable;
  }
}
