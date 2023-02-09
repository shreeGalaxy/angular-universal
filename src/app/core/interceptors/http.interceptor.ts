import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private storage: StorageService) {}

    intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
        const idToken = this.storage.getLocalStorageItem('id_token');
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
