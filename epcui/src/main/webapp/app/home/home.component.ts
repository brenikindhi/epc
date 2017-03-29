import { Component } from '@angular/core';
import { ElementRef, AfterViewInit }   from '@angular/core';
declare var $: JQueryStatic;

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: 'home.template.html'
})
export class HomeComponent implements AfterViewInit { 

    constructor(private _elementRef: ElementRef){}
    
    ngAfterViewInit() {
        window.homepagebanner();
        window.homestorelistslider()
        $('#zipModal').modal('show');
    }
 
}

