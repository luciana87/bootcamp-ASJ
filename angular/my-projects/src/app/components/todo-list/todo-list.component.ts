import { Component, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: { text: string; status: boolean; deleted: boolean, created: string}[] = [];
  filteredTaskList: { text: string; status: boolean; deleted: boolean , created: string}[] = this.tasks;
  newTask = '';
  p_date = new Date().toLocaleDateString();

  value_checkbox_completed = false;
  value_checkbox_incomplete = false;
  value_checkbox_deleted = false;

  // addTask () {
  //   this.tasks.push(this.newTask);
  //   this.newTask = '';
  // }


  addTask() {
    this.tasks.push({ text: this.newTask, status: false, deleted: false, created: new Date().toLocaleDateString()});
    this.newTask = '';
    this.p_date = new Date().toLocaleDateString();
  }

  taskCheked(i: number) {
    this.tasks[i].status = !this.tasks[i].status;
  }

  deleteTask(task: any) {
    task.deleted = true;
    this.filteredTasks();
  }

  filteredTasks() {
    if (this.value_checkbox_completed || this.value_checkbox_incomplete || this.value_checkbox_deleted) {
      this.filteredTaskList = this.tasks.filter(task =>
        (this.value_checkbox_completed && task.status) ||
        (this.value_checkbox_incomplete && !task.status) ||
        (this.value_checkbox_deleted && task.deleted)
      )

    } else {
      this.filteredTaskList = this.tasks.filter(task => !task.deleted);
    }
  }
}
