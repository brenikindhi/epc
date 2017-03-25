import { Injectable, Inject}              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {


    //result: any;
    //private productsUrl = ';

    constructor(public _http: Http) { }

    getProducts(): Observable<any> {
        let url = 'http://epc-env.us-east-1.elasticbeanstalk.com/EPCProductMgmt/api/products/';
        return this._http.get(url).map(result => result.json());

    }
    
//    private extractData(res: Response) {
//        let body = res.json();
//        console.log(body);
//        return body;
//       
//        
//        }
//    
//    private handleError (error: Response | any) {
//    // In a real world app, you might use a remote logging infrastructure
//    let errMsg: string;
//    console.error(errMsg);
//    return Observable.throw(errMsg);
//  }


}