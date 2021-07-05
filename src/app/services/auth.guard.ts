import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

 @Injectable()
 export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }

    canActivate() {
        let token = this.authService.isAuthenticated();
        if (token || true) {
            return true;
        }
        else {
            this.authService.login();
        }
    }
 }