import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { EPCEmitterService } from '.././utils/service/epc-emitter.service';

@Component({
    selector: 'main-menu',
    moduleId: module.id,
    templateUrl: 'main-menu.template.html'
})
export class MainMenuComponent {

    private zipCode: any;
    private subscription: any;

    constructor(private _epcEmitter: EPCEmitterService) {

    }

    ngOnInit() {
        this.subscription = this._epcEmitter.getZipChangeEmitter().
            subscribe(zip => this.setZipCode(zip));
        console.log('stored zip.. ' + this.zipCode);
    }
    setZipCode(zip: any) {
        this.zipCode = zip;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}