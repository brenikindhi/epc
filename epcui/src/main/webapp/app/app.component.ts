import { Component } from '@angular/core';
import { ElementRef, AfterViewInit }   from '@angular/core';
declare var $: JQueryStatic;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.template.html'
})
export class AppComponent implements AfterViewInit { 

    constructor(private _elementRef: ElementRef){}
    
    ngAfterViewInit() {
        $('#zipModal').modal('show');
    }
 
}

