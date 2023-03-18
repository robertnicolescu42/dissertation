import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, of, Subject, tap } from 'rxjs';

import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;

  userName$: Subject<string> = new Subject<string>();

  greeting = '';

  constructor(private router: Router, public cognitoService: CognitoService) {
    this.isAuthenticated = false;

    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
      if (success) {
        this.cognitoService
          .getUser()
          .then((user) => {
            let userNameCognito = user.attributes.email;
            this.userName$?.next(userNameCognito.split('@')[0]);
          })
          .catch((err) => {
            console.log('Error fetching user:', err);
          });
      }
    });

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
  }

  public ngOnInit(): void {}

  public signOut(): void {
    this.cognitoService.signOut().then(() => {
      this.router.navigate(['/signIn']);
    });
  }
}
