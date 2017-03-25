import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {ProductsService} from './products.service';

@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: 'products.template.html',
    //providers: [ProductsService]
})
export class ProductsComponent {

    products: any;

    constructor(private _productsService: ProductsService) { 
     this.getProducts();
    }

    getProducts() {
        this.products = [];
        console.log("suresh");

        this._productsService.getProducts()
            .subscribe(
                products => this.handleResponse(products), 
                error => console.log(error)
              )

    }
    
    handleResponse(response){
        this.products = response;
        console.log('products'+ JSON.stringify(response));    
    }
    
    addToCart(productId : number){
        
    }

}