import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {
    constructor(public router: Router, private storage:StorageService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        let role = this.storage.getLocalStorageItem('Role');
        if (role === 'admin') {
            this.router.navigate(['/dashboard/your-next']);
        }
        return true;
    }
}
