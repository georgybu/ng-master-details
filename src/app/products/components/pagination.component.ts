import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'm-pagination',
    template: `
        <ul *ngIf="range.length > 1">
            <li *ngIf="currentPage > 0" (click)="pageChange.emit(currentPage - 1)">prev</li>
            <li *ngFor="let page of range; let i = index"
                [ngClass]="{ 'current': currentPage === i}" (click)="pageChange.emit(i)">
                {{ i + 1 }}
            </li>
            <li *ngIf="currentPage + 1 < pagesCount" (click)="pageChange.emit(currentPage + 1)">next</li>
        </ul>
        <div *ngIf="range.length <= 1">
            only one page
        </div>
    `,
    styles: [`
        ul, li {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
            cursor: pointer;
            display: inline-block;
            margin: 0 4px;
        }

        li.current {
            color: blueviolet;
        }

        li:hover {
            color: aquamarine;
        }
    `]
})
export class PaginationComponent {
    @Input() currentPage: number = -1;
    @Input() pagesCount: number = 0;
    @Output() pageChange = new EventEmitter();

    get range(): number[] {
        return [...Array(this.pagesCount).keys()];
    }
}
