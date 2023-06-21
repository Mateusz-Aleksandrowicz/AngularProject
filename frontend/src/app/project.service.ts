import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProjectService {

  serverUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) {}

  getFeatures() {
    return this.http.get<any>(this.serverUrl + 'feature')
  }

  getFeatureDetails(featureId: string) {
    return this.http.get<any>(this.serverUrl + 'feature/' + featureId)
  }

  getFeatureTasks(featureId: string) {
    return this.http.get<any>(this.serverUrl + 'feature/' + featureId + '/task')
  }

  setTaskDoing(taskId: string) {
    return this.http.get<any>(this.serverUrl + 'task/' + taskId + '/doing')
  }
  setTaskDone(taskId: string) {
    return this.http.get<any>(this.serverUrl + 'task/' + taskId + '/done')
  }

  addTask(featureId: string, task: any) {
    return this.http.post<any>(this.serverUrl + 'feature/' + featureId + '/task', task)
  }

  deleteTask(taskId: string) {
    return this.http.delete<any>(this.serverUrl + 'task/' + taskId)
  }
  editTask(task: any) {
    return this.http.patch<any>(this.serverUrl + 'task/' + task._id, {name: task.name, description: task.description})
  }
}
