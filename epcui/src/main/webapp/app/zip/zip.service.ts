import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ZipService{
	
	constructor(public _http: Http){
	
	}
	
	validateZip(zip: any): Observable<any>{
		let url = 'http://epc-env.us-east-1.elasticbeanstalk.com/EPCProductMgmt/api/location/?zip=' + zip;
		return this._http.get(url)
					.map(result => result.json());
	}
}