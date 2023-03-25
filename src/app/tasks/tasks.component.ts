import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { todoArray } from 'src/todoArray';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  newTodoForm=new FormGroup({})
  constructor(private todoService:TodoService){
  }
todoListArray=todoArray
  delete(index:any){
    todoArray.splice(index,1)
  }

  update(id:number,editMode:boolean){
    let currentList=todoArray.find((p:any)=>{return p.id===id})
    editMode=true
    this.todoService.raiseDataEmitterEvent(currentList,editMode);
  }
}
