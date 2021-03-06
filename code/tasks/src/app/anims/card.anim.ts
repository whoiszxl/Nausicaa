import { trigger, state, transition, style, animate, keyframes } from "@angular/animations";

export const cardAnim = trigger('card', [
    state('out', style({transition: 'scale(1)','border-shadow':'none'})),
    state('hover', style({transition: 'scale(1.1)','border-shadow':'3px 3px 5px 6px #ccc'})),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out')),
])