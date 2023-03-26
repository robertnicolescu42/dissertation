import { Component } from '@angular/core';
import { CognitoService } from '../../cognito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn: boolean = true;
  userName: string = 'User';

  constructor(private userService: CognitoService) {
    this.userService.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        this.isLoggedIn = true;
        this.userService.getUser().then((user) => {
          this.userName = user.username;
        });
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
