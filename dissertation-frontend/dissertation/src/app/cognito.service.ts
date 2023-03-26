import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';

import { environment } from '../environments/environment';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  public authenticationSubject: BehaviorSubject<boolean>;
  public onLogin$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.onLogin$.next(false);
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated().then((authenticated) => {
      this.authenticationSubject.next(authenticated);
    });
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
      this.getIdToken().then((idToken) => {
        localStorage.setItem('idToken', idToken); // store the idToken in localStorage
      });
      this.onLogin$.next(false);
    });
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    return Auth.currentAuthenticatedUser()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser().then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

  public getAuthenticationSubject(): BehaviorSubject<boolean> {
    return this.authenticationSubject;
  }

  public getIdToken(): Promise<string> {
    return Auth.currentSession().then((session: any) => {
      return session.getIdToken().getJwtToken();
    });
  }

  public getIdTokenFromLocalStorage(): string | null {
    return localStorage.getItem('idToken')
      ? localStorage.getItem('idToken')
      : null;
  }
}
