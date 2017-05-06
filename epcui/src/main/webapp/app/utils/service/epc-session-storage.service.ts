import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../../products/product.data';
import { EPCEmitterService } from './epc-emitter.service';

 import * as _ from 'underscore';

@Injectable()
export class EPCSessionStorage{
	
	constructor(private _epcEmitter : EPCEmitterService){
        
    }
	
    setZipCode(zip: any){
        sessionStorage.setItem('zipCode', zip);
        this._epcEmitter.emitZipChangeEvent(zip);
    }

    getZipCode(){
        return JSON.parse(sessionStorage.getItem('zipCode'));
    }

    addProductToCart(product : any){
        var products : Product[]=  [];
        // if(_.isUndefined(sessionStorage.products) || _.isNull(sessionStorage.products)){
        if(JSON.parse(sessionStorage.getItem('cart')) !== null ){
             products = JSON.parse(sessionStorage.getItem('cart'));
        }

        let findProduct = _.where(products, {productId: product.productId});
        if(!_.isNull(findProduct) && !_.isUndefined(findProduct) && findProduct.length > 0){
            findProduct[0].quantity = findProduct[0].quantity + product.quantity;
        } else{
            products.push(product);
        }
        sessionStorage.setItem('cart', JSON.stringify(products));

    }

    getCartProducts(){
        return JSON.parse(sessionStorage.getItem('cart'));
    }
	
}