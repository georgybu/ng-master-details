import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ProductsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
