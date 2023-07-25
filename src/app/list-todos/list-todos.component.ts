import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[]= [];


  message: string  = "";
  // todo ={
  //   id: 1,
  //   description: 'Learn Java'

  // }

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ){}

  ngOnInit(){
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos('Afaf').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('Afaf', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodo();

      }
    )

  }

  updateTodo(id: any){
  console.log(`update ${id}`)
  this.router.navigate(['todos', id])
  }

  AddTodo(){
    this.router.navigate(['todos', -1])
    

  }

}
