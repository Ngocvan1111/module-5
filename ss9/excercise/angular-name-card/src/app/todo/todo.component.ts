import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {DataserviceService} from "../service/dataservice.service";
import {Router} from "@angular/router";
let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  content = new FormControl();

  constructor(private dataserviceService: DataserviceService, private router: Router) {
    this.dataserviceService.getAll().subscribe(data =>{
      console.log(data)
      this.todos = data;
    },error => {},() =>{

      }
      )
  }

  ngOnInit(): void {
  }
  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
  change() {
    const  value = this.content.value;
    if (value) {
      const todo:Todo = {

        content: value,
        complete: false
      };
      this.dataserviceService.saveProduct(todo).subscribe(data =>{})
      this.dataserviceService.getAll().subscribe(data =>{
        console.log(data)
        this.todos = data;
      })
      console.log("ok")
      this.content.reset();
    }


    }

  deleteTodo(id: any){
    alert("delete: "+ id)
    this.dataserviceService.deleteById(id).subscribe(data =>{
    })
    this.dataserviceService.getAll().subscribe(data =>{
      console.log(data)
      this.todos = data;
    })


  }
  }
