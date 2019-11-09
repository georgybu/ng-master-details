import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductItemContainerComponent} from './containers/product-item-container.component';
import {ProductSearchComponent} from './components/product-search.component';
import {ProductNavContainerComponent} from './containers/product-nav-container.component';
import {PaginationContainerComponent} from './containers/pagination-container.component';
import {PaginationComponent} from './components/pagination.component';
import {ProductSortComponent} from './components/product-sort.component';
import {AddNewProductComponent} from './components/add-new-product.component';
import {ProductItemComponent} from './components/product-item.component';
import {ProductListContainerComponent} from './containers/product-list-container.component';
import {ProductListComponent} from './components/product-list.component';
import {ProductDetailsComponent} from './components/product-details.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ProductListContainerComponent,
        PaginationContainerComponent,
        ProductItemContainerComponent,
        ProductNavContainerComponent,
        AddNewProductComponent,
        ProductItemComponent,
        ProductListComponent,
        PaginationComponent,
        ProductSearchComponent,
        ProductSortComponent,
        ProductDetailsComponent,
        ProductDetailsComponent,
    ],
    exports: [
        ProductNavContainerComponent,
        ProductListContainerComponent,
        PaginationContainerComponent,
        ProductItemContainerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule {
}
