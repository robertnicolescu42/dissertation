import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { CognitoService } from '../../cognito.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private cognitoService: CognitoService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = this.cognitoService.getIdTokenFromLocalStorage();
    if (!idToken) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `${idToken}`),
    });
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage =
          error.error instanceof ErrorEvent
            ? `Error: ${error.error.message}`
            : `Error Code: ${error.status}\nMessage: ${error.message}`;
        this.toastr.error(errorMessage, 'Error', {
          positionClass: 'toast-bottom-right',
        });
        return throwError(errorMessage);
      })
    );
  }
}
