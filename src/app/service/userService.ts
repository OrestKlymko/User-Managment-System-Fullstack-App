import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginModel} from "../models/loginModel";
import {Observable} from "rxjs";
import {RegistrationModel} from "../models/registrationModel";
import {CookieService} from "ngx-cookie-service";
import {TaskModelRequest} from "../models/taskModelRequest";
import {TaskModelResponse} from "../models/taskModelResponse";

@Injectable(
  {providedIn: 'root'}
)

export class UserService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  private HTTP_BASE_URL = "http://localhost:8080/api/v1/"
  private HTTP_BASE_URL_TASK = "http://localhost:8080/api/v1/tasks/"

  loginUser(user: LoginModel) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post<any>(this.HTTP_BASE_URL + 'login', user, options);
  }


  registrationUser(user: RegistrationModel): Observable<Object> {
    return this.httpClient.post(this.HTTP_BASE_URL + "registration", user)
  }


  getUserFromCookies() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get<any>(this.HTTP_BASE_URL + "user", options)

  }


  createTask(taskModel: TaskModelRequest) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post<any>(this.HTTP_BASE_URL_TASK + "create", taskModel, options)
  }


  getAllTaskList() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get<TaskModelResponse[]>(this.HTTP_BASE_URL_TASK + "get-all", options)
  }

  deleteTask(id: number) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(this.HTTP_BASE_URL_TASK + id, options)
  }
}
