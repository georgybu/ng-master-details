import {Component} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
    selector: 'm-product-list-container',
    template: `
        <m-loader *ngIf="loading"></m-loader>
        <ng-container *ngIf="product.items$ | async as products">
            <m-product-list *ngIf="products" 
                            [products]="products"
                            [selectedItem]="product.selectedItem$ | async"
                            (deleteProduct)="product.deleteProduct($event)"
                            (selectProduct)="product.selectProduct($event)"></m-product-list>
        </ng-container>
    `,
    styles: []
})
export class ProductListContainerComponent {
    public loading = true;

    constructor(public product: ProductService) {
    }

    ngOnInit() {
        // NOTE: not need to unsubscribe from "http" subscription
        // "http" observer call to `.complete()` function after completion
        this.product.getProducts().subscribe(() => this.loading = false);
    }
}
