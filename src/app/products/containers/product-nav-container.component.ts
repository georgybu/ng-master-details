import {Component} from '@angular/core';
import {Sort} from '../models/Sort';
import {ProductService} from '../product.service';

@Component({
    selector: 'm-product-nav-container',
    template: `
        <ng-container *ngIf="product.items$ | async">
            <m-add-new-product (add)="onAdd($event)"></m-add-new-product>
            <m-product-search (search)="onSearch($event)"></m-product-search>
            <m-product-sort (sortChange)="onSortChange($event)"></m-product-sort>
        </ng-container>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
            margin: 4px 0;
        }
    `]
})
export class ProductNavContainerComponent {

    constructor(private product: ProductService) {
    }

    onSortChange($event: Sort) {
        this.product.sortProducts($event);
    }

    onSearch($event: string) {
        this.product.searchProducts($event);
    }

    onAdd($event: any) {
        // TODO: reuse "product-details" component
        alert('Add new product');
    }
}
