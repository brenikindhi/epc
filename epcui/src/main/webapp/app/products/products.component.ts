import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {ProductsService} from './products.service';
import { EPCSessionStorage } from '.././utils/service/epc-session-storage.service';
import {Product} from './product.data';

@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: 'products.template.html'
})
export class ProductsComponent {

    products: any;

    constructor(private _productsService: ProductsService, private _epcStorageService: EPCSessionStorage) { 
     this.getProducts();
    }

    getProducts() {
        this.products = [];

        this._productsService.getProducts()
            .subscribe(
                products => this.handleResponse(products), 
                error => console.log(error)
              )

    }
    
    handleResponse(response: any){
        this.products = response;
        //console.log('products'+ JSON.stringify(response));    
    }
    
    addToCart(productId : string){
        let product = new Product(productId);
        this._epcStorageService.addProduct(product);

        //console.log('Products in cart: '+ this._epcStorageService.getProducts());
    }

}