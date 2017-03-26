import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../../products/product.data';

// import * as _ from 'underscore';

@Injectable()
export class EPCSessionStorage{
	
	constructor(){
        
    }
	
    setZipCode(zip: any){
        sessionStorage.zipCode = zip;
    }

    getZipCode(){
        return sessionStorage.zipCode;
    }

    addProduct(product : any){
        var products : Product[]=  [];
        // if(_.isUndefined(sessionStorage.products) || _.isNull(sessionStorage.products)){
        if(JSON.parse(sessionStorage.getItem('cart')) !== null ){
             products = JSON.parse(sessionStorage.getItem('cart'));
         }

        products.push(product);
        sessionStorage.setItem('cart', JSON.stringify(products));

    }

    getProducts(){
        return JSON.parse(sessionStorage.getItem('cart'));
    }
	
}