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
}
