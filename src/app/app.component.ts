import {Component} from '@angular/core';

@Component({
    selector: 'm-root',
    template: `
        <div class="app-title">My Store</div>
        <div class="container">
            <div class="product-list">
                <m-product-nav-container></m-product-nav-container>
                <m-product-list-container></m-product-list-container>
                <m-pagination-container></m-pagination-container>
            </div>
            <div class="product-details">
                <m-product-item-container></m-product-item-container>
            </div>
        </div>
    `,
    styles: [`
        .app-title {
            background-color: aliceblue;
            padding: 32px;
            font-size: 24px;
        }

        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
        }

        .product-list,
        .product-details {
            flex: 1;
            min-width: 250px;
        }
    `]
})
export class AppComponent {
}
