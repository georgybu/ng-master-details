import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'm-product-search',
    template: '<label><input type="text" placeholder="search" (input)="search.emit($event.target?.value)"/></label>',
    styles: []
})
export class ProductSearchComponent {
    @Output() search = new EventEmitter();
}
