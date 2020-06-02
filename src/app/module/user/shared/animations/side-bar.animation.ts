import { trigger, state, animate, transition, style, query, group } from '@angular/animations';

export const sideBarAnimation =
    trigger('sideBarAnimation', [
        transition('* <=> *', [
            query(':enter', style({ opacity: 0, transform: 'translateX(-200px)' }), { optional: true }),
            query(':leave', style({ opacity: 1, transform: 'none' }), { optional: true }),
            group([
                query(':leave', animate(500, style({ opacity: 0, transform: 'translateX(-200px)' })), { optional: true }),
                query(':enter', animate(500, style({ opacity: 1, transform: 'none' })), { optional: true })
            ])
        ])
    ]);
