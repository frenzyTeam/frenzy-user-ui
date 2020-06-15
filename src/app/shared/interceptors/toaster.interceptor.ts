import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { MessageService } from 'primeng/api';

@Injectable()
export class ToasterInterceptor implements HttpInterceptor {
    constructor(public msgService: MessageService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log(evt)
                    console.log(evt.body || evt.body.error_status)
                    if (evt.body || evt.body.error_status)
                        console.log("fdjdfjbn")
                        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Success' });

                }
            }),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    try {
                        this.msgService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Occured' });
                    } catch (e) {
                        this.msgService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Occured' });
                    }
                }
                return of(err);
            }));

    }

}