import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() public todoList : string[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(element:any) {
    this.todoList = this.todoList.filter(e=>e!==element)
    console.log(this.todoList);
  }

}
