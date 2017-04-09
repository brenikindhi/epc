import {EventEmitter} from '@angular/core';

export class EPCEmitterService {
  zipCode: EventEmitter<any> = new EventEmitter();

  constructor() {}
  
  emitZipChangeEvent(zip: any) {
    this.zipCode.emit(zip);
  }
  getZipChangeEmitter() {
    return this.zipCode;
  }
}