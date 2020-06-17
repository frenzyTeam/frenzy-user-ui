import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, finalize } from "rxjs/operators";
import { NotifyService } from '../../module/user/shared/services/notify.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public notifyService: NotifyService, private msgService: MessageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.notifyService.setLoading(true);
        req = req.clone({
            setHeaders: {
                'x-access-token': `${localStorage.getItem('token')}`
            }
        });
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.body || evt.body.error_status)
                        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Success' });

                }
            }),
            finalize(() => this.notifyService.setLoading(false)),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    try {
                        this.msgService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Occured' });
                    } catch (e) {
                        this.msgService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Occured' });
                    }
                }
                return of(err);
            }),
        );
    }
}
