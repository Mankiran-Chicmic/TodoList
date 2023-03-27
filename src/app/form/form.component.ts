import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { todoArray } from 'src/todoArray';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  todoListForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    task:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
  })

 get task(){
  return this.todoListForm.get('task')
 }

 get date(){
  return this.todoListForm.get('date')
 }
  
 get status(){
  return this.todoListForm.get('task')
 }
 get name(){
  return this.todoListForm.get('name')
 }

editMode=false;
 constructor(private todoService:TodoService){
  this.todoService.dataEmitter.subscribe((res:any)=>{
    console.log("res===>",res)
      this.todoListForm.setValue({
        name:res.data.name,
        task:res.data.task,
        date:res.data.date,
        status:res.data.status
      });
      this.editMode=res.editMode
  })
 }
@Input() data=new EventEmitter<{form:any}>
 todoListArray=todoArray
 showErrors=false 

  todo(data:any){
     if(this.editMode==false)
     {
      if(this.todoListForm.valid)
      {
              todoArray.push({"id":todoArray.length+1,"data":data})
              this.todoListForm.setValue({
                name:"",
                task:"",
                date:"",
                status:""
              })
      }
      else
      {
        this.showErrors=true;
      }
     }
     else
     {
      console.log("=====>todoArray",todoArray[todoArray[0].id].data)
      console.log("=====>todoArrayData",data)
       todoArray[todoArray[0].id].data=data
     }
  }


}
