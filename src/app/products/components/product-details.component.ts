import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Product} from '../models/Product';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'm-product-details',
    template: `
        <form [formGroup]="form" (submit)="onSubmit($event)" *ngIf="product">
            <img [src]="product.url" [alt]="product.description">
            <input type="text" formControlName="name" placeholder="name">
            <input type="text" formControlName="description" placeholder="description">
            <input type="text" formControlName="price" placeholder="price">
            <button type="submit">Save</button>
        </form>
    `,
    styles: []
})
export class ProductDetailsComponent implements OnChanges {
    @Input() product: Product;
    @Output() save = new EventEmitter();

    public form: FormGroup = this.fb.group({
        description: [''],
        name: [''],
        price: ['']
    });

    constructor(private fb: FormBuilder) {
    }

    onSubmit($event: Event) {
        this.save.emit(this.form.value);
    }

    ngOnChanges(changes: SimpleChanges): void {
        const {product} = changes;
        if (product.currentValue) {
            const {description, name, price} = product.currentValue;
            this.form.patchValue({description, name, price});
        }
    }
}
