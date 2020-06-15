import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { NotifyService } from '../../module/user/shared/services/notify.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public notifyService: NotifyService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.notifyService.setLoading(true);
        return next.handle(req).pipe(
            finalize(() => this.notifyService.setLoading(false))
        );
    }
