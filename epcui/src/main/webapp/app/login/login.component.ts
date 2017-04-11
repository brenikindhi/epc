import { Component } from '@angular/core';
import { ElementRef, AfterViewInit }   from '@angular/core';
//declare var $: JQueryStatic;

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: 'login.template.html'
})
export class LoginComponent { 

    private userName: string;
    private password: string;

    constructor(){}
    
    submit(){
        console.log("user " + this.userName + " pwd : " + this.password);
    }
}

