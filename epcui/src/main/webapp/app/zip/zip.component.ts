import {Component, OnInit, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ZipService} from './zip.service';
import { EPCSessionStorage } from '.././utils/service/epc-session-storage.service';

declare var $: JQueryStatic;

@Component({
    selector: 'zip',
    moduleId: module.id,
    templateUrl: 'zip.template.html'
    })
export class ZipComponent {

	private zipCode : number;
	private isValidZip : boolean = true;
	
	constructor(private _zipService : ZipService, private _epcSessionStorage: EPCSessionStorage){}
	

	validateZip() {
	
		console.log('zipCode ---> ' + this.zipCode);
		this._zipService.validateZip(this.zipCode)
			.subscribe(
				result => this.handleResponse(result),
				error => this.handleError(error)
			)
	}    
	
	handleResponse(response: any){
		console.log('zip response: ' + JSON.stringify(response));
		this.isValidZip = response.active;
		if(this.isValidZip){
			console.log('valid zip');
			$('#zipModal').modal('hide');
			this._epcSessionStorage.setZipCode(this.zipCode);
		}
		
	}
	
	handleError(response : any){
		console.log('zip validation : ' + response._body);
		if(response.status === 404){
			this.isValidZip = false;
		}
	}
    
}