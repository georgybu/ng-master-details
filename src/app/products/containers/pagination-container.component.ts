import {Component} from '@angular/core';
import {ProductService} from '../product.service';

@Component({
    selector: 'm-pagination-container',
    template: `
        <ng-container *ngIf="product.items$ | async as products">
            <ng-container *ngIf="product.pagination$ | async as pagination">
                <m-pagination [currentPage]="pagination[0]" [pagesCount]="pagination[1]"
                              (pageChange)="onPageChange($event)"></m-pagination>
            </ng-container>
        </ng-container>
    `,
    styles: [`
        :host {
            padding: 4px 0;
            margin: 4px 0;
            display: flex;
            justify-content: center;
        }
    `]
})
export class PaginationContainerComponent {
    constructor(private product: ProductService) {
    }

    onPageChange($event: number) {
        this.product.paginateProducts($event);
    }
}
