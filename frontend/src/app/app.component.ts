import { Component } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manageme';
  features: any;
  // showDetails = false;
  featureDetails: any = null;
  featureTasks: any = null;
  newTask = {
    _id: "",
    name: "",
    description: ""
  }

  constructor(private projectService: ProjectService) {
    projectService.getFeatures().subscribe((features) => {
      this.features = features;
    });
  }

  loadFeatureDetails(featureId: string) {
    console.log(featureId)
    // this.showDetails = true;
    this.projectService.getFeatureDetails(featureId).subscribe((feature) => {
      this.featureDetails = feature;
      this.projectService.getFeatureTasks(featureId).subscribe((tasks) => {
        this.featureTasks = tasks;
      })
    })
  }

  close() {
    this.featureDetails = null;
  }

  onReload(featureId: string) {
    this.loadFeatureDetails(featureId);
  }

  addTask(featureId: string) {
    if (this.newTask._id) {
      this.projectService.editTask(this.newTask).subscribe((task) => {
        if (task) {
          this.reset();
          this.onReload(featureId);
        }
      })
    } else {
      this.projectService.addTask(featureId, this.newTask).subscribe((res) => {
        if(res) {
          this.reset();
          this.onReload(featureId);
        }
      })
    }

  }

  onEdit(task: any) {
    this.newTask = {
      _id: task._id,
      name: task.name,
      description: task.description,
    }
  }

  reset() {
    this.newTask = {_id: "", name: "", description: ""};
  }
}
