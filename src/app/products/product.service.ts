import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Product} from './models/Product';
import {BehaviorSubject, Observable} from 'rxjs';
import {Sort} from './models/Sort';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // this is like products selector (with search and filter)
    public items$: BehaviorSubject<Product[]> = new BehaviorSubject(null);
    public selectedItem$: BehaviorSubject<Product | null> = new BehaviorSubject(null);
    public pagination$: BehaviorSubject<[number, number]> = new BehaviorSubject([0, 0]);

    // all products
    private productStore: Product[] = [];
    private search: string;
    private sort: Sort;
    private pageIndex: number;

    // if url is not available please, use
    // private readonly url = '/assets/data.json';
    private readonly url = 'https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json';

    constructor(private http: HttpClient) {
    }

    public getProducts(): Observable<boolean> {
        return this.http.get<Product[]>(this.url).pipe(
            map(response => response.reduce((acc, e) => acc.concat(this.getProductsByType(e)), [])),
            tap(response => this.productStore = response),  // save to origin list
            tap(response => this.items$.next(this.getPaginatedPage(response))),
            map(() => true) // success
        );
    }

    public selectProduct(product: Product) {
        this.selectedItem$.next(product);
    }

    public deleteProduct(product: Product) {
        console.log('deleteProduct', product)
    }

    public searchProducts(search: string) {
        const page = this.getPaginatedPage(this.productStore, search, this.sort, this.pageIndex);
        this.items$.next(page);
    }

    public paginateProducts(pageIndex: number) {
        const page = this.getPaginatedPage(this.productStore, this.search, this.sort, pageIndex);
        this.items$.next(page);
    }

    public sortProducts(sort: Sort) {
        const page = this.getPaginatedPage(this.productStore, this.search, sort, this.pageIndex);
        this.items$.next(page);
    }

    private getPaginatedPage(products: Product[],
                             search: string = '',
                             sort: Sort = Sort.ORIGIN,
                             index: number = 0,
                             productsPerPage: number = 5): Product[] {

        if (!products.length) {
            return [];
        }

        this.search = search;
        this.sort = sort;

        const result = products.filter(this.getSearchPredicate(search.trim())).sort(this.getSortPredicate(sort));

        const pagesCount = Math.floor(result.length / productsPerPage);

        // current page index should be less than pages count
        const pageIndex = (index + 1 > pagesCount) ? 0 : index;
        const statingIndex = pageIndex * productsPerPage;

        this.pageIndex = pageIndex;
        this.pagination$.next([pageIndex, pagesCount]);

        return result.slice(statingIndex, statingIndex + productsPerPage);
    }

    private getProductsByType(data: any) {
        switch (data.type) {
            case 1:
                return [new Product({...data.fedex, type: 1, deliveryComp: 'fedex'})];
            case 2:
                return data.ups.map(e => new Product({...e, type: 2, deliveryComp: 'ups'}));
            case 3:
                return new Product(data);
            default:
                throw new Error(`Missing product type for: ${JSON.stringify(data)}`);
        }
    }

    private getSearchPredicate(search: string) {
        return (p: Product) => {
            if (search.length) {
                // search will be case insensitive
                const term = search.toLowerCase();
                const fields = ['name', 'description'];
                return fields.reduce((acc, curr) => acc || p[curr].toLowerCase().indexOf(term) > -1, false);
            }
            return p;
        }
    }

    private getSortPredicate(sort: Sort) {
        const toLower = (s) => s.trim().toLowerCase();
        const stringCompare = (s1, s2) => (s1 > s2) ? 1 : (s1 < s2) ? -1 : 0;

        return (a: Product, b: Product) => {
            switch (sort) {
                case Sort.BY_PRICE_ASC:
                    return a.price - b.price;
                case Sort.BY_PRICE_DESC:
                    return b.price - a.price;
                case Sort.BY_NAME_DESC:
                    return stringCompare(toLower(b.name), toLower(a.name));
                case Sort.BY_NAME_ASC:
                case Sort.ORIGIN:
                default:
                    return stringCompare(toLower(a.name), toLower(b.name));
            }
        }
    }
}
