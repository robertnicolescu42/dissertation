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
  showDropdown: boolean = false;
  greeting = '';

  constructor(private router: Router, public cognitoService: CognitoService) {
    this.isAuthenticated = false;

    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
      if (success) {
        let userName = localStorage.getItem('userName');
        if (userName) this.userName$.next(userName);
      } else {
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

    // Listen for login events and update the username
    this.cognitoService.onLogin$.subscribe(() => {
      this.cognitoService.getUser().then((user) => {
        let userNameCognito = user.attributes.email.split('@')[0];
        localStorage.setItem('userName', userNameCognito);
        this.userName$.next(userNameCognito);
      });
    });
  }

  public ngOnInit(): void {}

  public signOut(): void {
    localStorage.removeItem('userName');
    this.cognitoService.signOut().then(() => {
      this.router.navigate(['/signIn']);
    });
  }

  handleDropdownClick(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown-menu');
    if (!dropdown!.contains(event.target as Node)) {
      this.showDropdown = false;
    }
  }
}
