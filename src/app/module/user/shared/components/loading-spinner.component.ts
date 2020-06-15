import { Component, OnInit, Renderer2 } from '@angular/core';
import { NotifyService } from '../services/notify.service';

@Component ({
    selector: 'app-loading-spinner',
    template: `
        <div class="loading" *ngIf="isLoading">
            <div class="loading__wrapper">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>
            </div>
        </div>`
})

export class LoadingSpinnerComponent {
    isLoading: boolean;
    constructor (
        private notify: NotifyService,
        private renderer: Renderer2
    ) {
        this.notify.getLoading()
          .subscribe( result => {
              this.isLoading = result;
               if (result) {
                       this.renderer.addClass(document.body, 'is-loading');
                   } else {
                       this.renderer.removeClass(document.body, 'is-loading');
                   }
              }
          );
    }
}
