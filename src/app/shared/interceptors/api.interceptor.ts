import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

//service
import { AlertService } from '../services/alert.service';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable()

export class APIInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private alertService: AlertService,
    public handleErrorService: HandleErrorService
  ) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (!this.token) {
    //   this.alertService.changeMessage({
    //     color: 'red',
    //     text: 'Bạn chưa đăng nhập'
    //   });
    //   setTimeout(() => this.router.navigateByUrl('/login'), 2500);
    // }
    const token = localStorage.getItem('access_token');
    const request = req.clone({
      // url: `http://192.168.1.33/spacrm/${req.url}`,
      url: `http://civieserver-env.h7rxnvnypm.ap-southeast-1.elasticbeanstalk.com/spacrm/${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request).pipe(catchError(this.handleErrorService.handleError));
  }

}
