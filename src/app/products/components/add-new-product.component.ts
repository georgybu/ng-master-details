import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'm-add-new-product',
    template: '<button (click)="add.emit(true)">Add new</button>'
})
export class AddNewProductComponent {
    @Output() add = new EventEmitter();
}
