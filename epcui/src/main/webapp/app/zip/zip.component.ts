import {Component, OnInit, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ZipService} from './zip.service';

@Component({
    selector: 'zip',
    moduleId: module.id,
    templateUrl: 'zip.template.html'
    })
export class ZipComponent {

	private zipCode : string = '';
	private isValidZip : boolean = true;
	
	constructor(private _zipService : ZipService){}
	

	validateZip() {
	
		console.log('zipCode ---> ' + this.zipCode);
		this._zipService.validateZip(this.zipCode)
			.subscribe(
				result => this.handleResponse(result),
				error => this.handleError(error)
			)
	}    
	
	handleResponse(result){
		console.log('zip response: ' + result);
		this.isValidZip = result.active;
	}
	
	handleError(error){
		console.log(error);
	}
    
}