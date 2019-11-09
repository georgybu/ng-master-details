import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sort} from '../models/Sort';

@Component({
    selector: 'm-product-sort',
    template: `
        <label>
            <select [value]="sort" (change)="onSortChange($event.target.value)">
                <option [value]="SortEnum.BY_NAME_ASC">by name (A-Z)</option>
                <option [value]="SortEnum.BY_NAME_DESC">by name (Z-A)</option>
                <option [value]="SortEnum.BY_PRICE_ASC">by price (lower first)</option>
                <option [value]="SortEnum.BY_PRICE_DESC">by price (highest first)</option>
            </select>
        </label>
    `,
    styles: []
})
export class ProductSortComponent {
    @Input() sort: Sort;
    @Output() sortChange = new EventEmitter();

    public SortEnum = Sort;

    onSortChange($event: string) {
        this.sortChange.emit(parseInt($event) as Sort);
    }
}
