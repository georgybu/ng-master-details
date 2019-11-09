import {Component} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
    selector: 'm-product-item-container',
    template: `
        <ng-container *ngIf="product.items$ | async">
            <ng-container *ngIf="product.selectedItem$ | async as product; else missingProduct">
                <h2>{{ product.name }} details</h2>
                <m-product-details [product]="product"></m-product-details>
            </ng-container>
            <ng-template #missingProduct>Please, select product</ng-template>
        </ng-container>
    `,
    styles: []
})
export class ProductItemContainerComponent {
    constructor(public product: ProductService) {
    }
}
