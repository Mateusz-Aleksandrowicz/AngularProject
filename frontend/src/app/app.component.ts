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
}
