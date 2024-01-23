import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  constructor(private service: TodolistService) { }

  tasks: Task[] = [];
  filteredTaskList: Task[] = this.tasks;
  newTask = '';
  newTitleTask = '';
  p_date = new Date().toLocaleDateString();

  ngOnInit(): void {
    this.showAllTasks();
  }



  value_checkbox_completed = false;
  value_checkbox_incomplete = false;
  value_checkbox_deleted = false;

  // addTask () {
  //   this.tasks.push(this.newTask);
  //   this.newTask = '';
  // }

  showAllTasks() {
    this.service.getAllTareas().subscribe(
      (tareas: Task[]) => {
        this.tasks = tareas;
        this.filteredTasks();
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  addTask() {
    this.service.createTarea({ name: this.newTitleTask, status: false, deleted: false, created: new Date().toLocaleDateString(), text: this.newTask }).subscribe(response => {
      console.log(response);
      this.showAllTasks();
    })

    this.newTask = '';
    this.newTitleTask = '';
  }

  // deleteTask(task: any) {
  //   task.deleted = true;
  //   this.filteredTasks();
  // }

  deleteTask(task: Task) {
    task.deleted = true;
    this.service.updateTarea(task.id, task).subscribe(response => {
      this.filteredTasks()
    })

  }

  taskCheked(task: Task) {
    task.status = !task.status;
    this.service.updateTarea(task.id, task).subscribe(response => {
      this.filteredTasks()
    })
  }

  filteredTasks() {
    if (this.value_checkbox_completed || this.value_checkbox_incomplete || this.value_checkbox_deleted) {
      this.filteredTaskList = this.tasks.filter(task =>
        (this.value_checkbox_completed && task.status && !task.deleted) ||
        (this.value_checkbox_incomplete && !task.status && !task.deleted) ||
        (this.value_checkbox_deleted && task.deleted)
      )

    } else {
      this.filteredTaskList = this.tasks.filter(task => !task.deleted);
    }
  }
}
