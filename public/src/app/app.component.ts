import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  tasks: any = [];
  third_task: any;
  newTask: any;
  this_task: any;

  constructor(private _httpService: HttpService){
    this.tasks = [];
    this.third_task = [];
  }

  ngOnInit(){
    this.getTasksFromService();
    this.getTaskFromService();
    this.newTask = {title: "", description: ""}
    this.this_task = {title: "", description: ""}
  } 
  
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      this.tasks = data;
      console.log("Look at",this.tasks);
    });
  }
  getTaskFromService(){
    this._httpService.getTask('5c8ac89e8d40f8624dbc343c')
    .subscribe(data => {
      this.third_task = data;
      console.log("Got our task!", data)
    });
  }

  createTaskFromService() {
    this._httpService.addTask(this.newTask)
    .subscribe(data => {
      console.log(data, "Input into the database");
    });
    this.newTask = {title: "", description: ""}
    this.getTasksFromService();
  }

  displayEditForm(task){
    this.this_task = task;
  }

  updateTaskFromService(task) {
    this._httpService
    .updateTask(task._id, task)
    .subscribe(data => {
      console.log("updated", data);
    });
    // this.getTasksFromService();
  }

  deleteTaskFromService(task){
    this._httpService.deleteTask(task._id)
    .subscribe(data => {
      console.log("deleted", data);
    });
    this.getTasksFromService();
  }
}
