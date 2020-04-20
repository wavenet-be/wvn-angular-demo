import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@wavenet/ngx-wvn-core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  authenticated: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.loginRedirectUrl = "/authentication/login";
    this.authenticationService.forbiddenRedirectUrl = "/authentication/forbidden";
    this.authenticationService.user.subscribe(user => {
      this.authenticated = user != null;
    });
  }

  authenticationChanged(authentication: boolean) {
    if (authentication) {
      this.authenticationService.user.next({
        userId: 'test',
        roles: ['TEST_ROLE']
      });
    } else {
      this.authenticationService.clear();
    }
  }
}
