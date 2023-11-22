import {Component, OnInit} from '@angular/core';
import {CurrentUserModel} from "../models/currentUserModel";
import {UserService} from "../service/userService";
import {CookieService} from "ngx-cookie-service";
import {TaskModelRequest} from "../models/taskModelRequest";
import {TaskModelResponse} from "../models/taskModelResponse";

@Component({
  selector: 'app-user-pannel-component',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  nameUser = "";
  task: TaskModelRequest = new TaskModelRequest()
  listOfTasks: TaskModelResponse[] = [];


  constructor(private userService: UserService, private cookieService: CookieService) {
  }


  getUserFromCookies() {
    return this.userService.getUserFromCookies();
  }

  ngOnInit(): void {
    this.getUserFromCookies().subscribe(data => {
      this.nameUser = data.name
    })
    this.getAllTasks()

  }

  createTask(event: Event) {
    event.preventDefault()
    this.userService.createTask(this.task).subscribe(() => this.getAllTasks())
  }

  getAllTasks() {
    this.userService.getAllTaskList().subscribe(data => {
      for (const task of data) {
        const existingTask = this.listOfTasks.find(existing => existing.id === task.id);
        if (!existingTask) {
          this.listOfTasks.push(task);
        }
      }
    });
  }

  deleteTask(id:number) {
    this.userService.deleteTask(id).subscribe(()=>{
      this.listOfTasks=this.listOfTasks.filter(task=>task.id!=id)
    })
  }
}
