import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: { text: string; status: boolean }[] = [];
  newTask = '';

  // addTask () {
  //   this.tasks.push(this.newTask);
  //   this.newTask = '';
  // }

  addTask() {
    this.tasks.push({ text: this.newTask, status: false });
    this.newTask = '';
  }

  statusTask (i: number) {
    this.tasks[i].status = !this.tasks[i].status;
  }
}
