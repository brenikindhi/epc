import { Component , OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router }  from '@angular/router';
declare var $: JQueryStatic;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.template.html'
})
export class AppComponent implements AfterViewInit, OnInit { 

    constructor(private _elementRef: ElementRef, private _router: Router){}
    
    ngAfterViewInit() {
        // window.homepagebanner();
        // window.homestorelistslider()
        //window.responsiveLayout();
        
    }

    ngOnInit(){
        this._router.navigate(['/home']);
    }
 
}

