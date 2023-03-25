import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  dataEmitter=new EventEmitter<{data:any,editMode:boolean}>();
  raiseDataEmitterEvent(data:any,editMode:boolean)
  {
      this.dataEmitter.emit({data:data,editMode:editMode})
  }
}
