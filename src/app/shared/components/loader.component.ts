import {Component} from '@angular/core';

// Taken from: https://loading.io/css/
@Component({
    selector: 'm-loader',
    template: '<div class="lds-dual-ring"></div>',
    styles: [`
        .lds-dual-ring {
            display: inline-block;
            width: 64px;
            height: 64px;
        }

        .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 46px;
            height: 46px;
            margin: 1px;
            border-radius: 50%;
            border: 5px solid gray;
            border-color: gray transparent gray transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }

        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `]
})
export class LoaderComponent {
}
