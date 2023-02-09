import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { passwordValidator } from '../../../../core/validators/custom.validators';
import { StorageService } from 'src/app/core/services/storage.service';
import { Login } from '../../model/login';
import { ToasterService } from 'src/app/shared/components/toaster/toaster.service';
import { LoaderService } from 'src/app/shared/components/spinner/loader.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, passwordValidator])
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private toaster: ToasterService,
        private loadingService: LoaderService,
        private storage: StorageService
    ) {}
    onSubmit(): void {
        this.loadingService.setLoading(true);
        if (!this.loginForm.valid) {
            this.loadingService.setLoading(false);
            return this.loginForm.markAllAsTouched();
        }
        const req: Login = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.authService.login(req).subscribe({
            next: (data) => {
                this.storage.setLocalStorageItem('Role', 'admin');
                this.loadingService.setLoading(false);
                this.toaster.show('success', 'Hurray!', 'Login successfully');
                if (data[0].token) {
                    this.storage.setLocalStorageItem('id_token', data[0].token);
                    this.router.navigateByUrl('/dashboard/your-next', { state: { data: req } });
                }
            },
            error: (err) => {
                this.loadingService.setLoading(false);
                this.toaster.show('error', 'Error!', 'Please check credential');
            }
        });
    }
}
