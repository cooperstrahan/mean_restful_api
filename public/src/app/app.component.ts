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
  show = false;
  this_show: any;

  constructor(private _httpService: HttpService){
    this.tasks = [];
    this.third_task = [];
  }

  ngOnInit(){
    this.getTaskFromService();
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

  onButtonClick(): void { 
    console.log(`Click event is working`);
    this.getTasksFromService();
  }

  onShowClick(task): void {
    this.show = !this.show;
    this.this_show = task;
  }
}
