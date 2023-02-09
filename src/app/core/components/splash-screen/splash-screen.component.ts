import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
    // The screen starts with the maximum opacity
    opacityChange: number = 1;
    splashTransition: string | undefined;
    // First access the splash is visible
    @Input() showSplash: boolean = true;
    readonly ANIMATION_DURATION = 1;

    ngOnInit(): void {
        const time = timer(5000, 1000);
        time.subscribe(() => {
            this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
            this.opacityChange = 0;
        });
    }
}
