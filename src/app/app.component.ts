import { Subscription, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Toast } from './core/interface/toast.interface';
import { ToasterService } from './shared/components/toaster/toaster.service';
import { StorageService } from './core/services/storage.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Angular-Boilerplate';
    toastSubscription: Subscription = new Subscription();
    theme: string = 'theme-light';
    toasts: Toast[] = [];
    showSplash: boolean = true;
    lastUrlValue: string = '';
    constructor(private toaster: ToasterService, private storage: StorageService, private router: Router) {}
    themeChange(theme: string): void {
        this.theme = theme;
    }

    ngOnInit(): void {
        this.storage.setLocalStorageItem('lastAction', Date.now().toString());
        this.toaster.toast$.subscribe((toast: Toast) => {
            this.toasts = [toast, ...this.toasts];
            this.unsubscribeToastMsg();
        });
        const splashScreenState = timer(1000);
        splashScreenState.subscribe(() => {
            this.showSplash = false;
        });
    }

    unsubscribeToastMsg(): void {
        const broadcastToastMessage = timer(3000, 1000);
        this.toastSubscription = broadcastToastMessage.subscribe(() => {
            this.remove(0);
            // TODO: need to find better way to do this functionality
            this.toastSubscription.unsubscribe();
        });
    }

    remove(index: number): void {
        this.toasts.splice(index, 1);
    }
}
