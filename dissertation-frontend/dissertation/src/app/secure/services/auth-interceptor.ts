import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CognitoService } from '../../cognito.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cognitoService: CognitoService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = this.cognitoService.getIdTokenFromLocalStorage();
    if (!idToken) {
      return next.handle(req); // no idToken in localStorage, so proceed with the original request
    }
    const authReq = req.clone({
      headers: req.headers
        // .set('Authorization', `Bearer ${idToken}`)
        .set('Authorization', `${idToken}`)
        // .set('Content-Type', 'application/json')
        // .set('Access-Control-Allow-Origin', 'http://localhost:4200/'),
    });
    return next.handle(authReq);
  }
}
