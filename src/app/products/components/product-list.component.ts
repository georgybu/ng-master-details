import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
    selector: 'm-product-list',
    template: `
        <m-product-item *ngFor="let product of products"
                        [ngClass]="{ 'selected': selectedItem === product }"
                        [product]="product"
                        (selectProduct)="selectProduct.emit($event)"
                        (deleteProduct)="deleteProduct.emit($event)"></m-product-item>
    `,
    styles: [`
        m-product-item {
            display: block;
        }

        .selected {
            background-color: aqua;
        }
    `]
})
export class ProductListComponent {
    @Input() products: Product[];
    @Input() selectedItem: Product;
    @Output() selectProduct = new EventEmitter();
    @Output() deleteProduct = new EventEmitter();
}
