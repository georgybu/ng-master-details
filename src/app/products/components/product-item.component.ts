import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
    selector: 'm-product-item',
    template: `
        <div class="product-item" (click)="selectProduct.emit(product)">
            <div class="thumbnail">
                <img [src]="product.thumbnailUrl" [alt]="product.description"/>
            </div>
            <div class="product-info">
                <div class="title">{{ product.name }}</div>
                <div class="description">{{ product.description }}</div>
                <div class="price">{{ product.price }}</div>
                <button class="delete" (click)="onDeleteClick($event, product)">Delete</button>
            </div>
        </div>
    `,
    styles: [`
        .product-item {
            display: flex;
            position: relative;
            border: 1px solid transparent;
            cursor: pointer;
            padding: 8px;
        }

        .thumbnail {
            margin-right: 8px;
        }

        img {
            width: 100px;
            height: 100px;
        }

        .delete {
            display: none;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .product-item:hover {
            border: 1px solid;
        }

        .product-item:hover button.delete {
            display: block;
        }
    `]
})
export class ProductItemComponent {
    @Input() product: Product;
    @Output() selectProduct = new EventEmitter();
    @Output() deleteProduct = new EventEmitter();

    onDeleteClick($event: MouseEvent, product: Product) {
        $event.stopPropagation();
        this.deleteProduct.emit(product);
    }
}
