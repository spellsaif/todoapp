import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public handleInput;
  @Input() public todoList;
  @Input() public item;

  public handleClick() {
    this.todoList.push(this.item)
    console.log(this.todoList);
    this.item = '';
  }
}
