import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EPCSessionStorage{
	
	constructor(){}
	
    setZipCode(zip: any){
        sessionStorage.zipCode = zip;
    }

    getZipCode(){
        return sessionStorage.zipCode;
    }
	
}