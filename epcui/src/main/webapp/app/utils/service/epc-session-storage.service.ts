import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../../products/product.data';
import { EPCEmitterService } from './epc-emitter.service';

// import * as _ from 'underscore';

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