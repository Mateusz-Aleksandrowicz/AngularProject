import { Component, Input } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-task',
  template: `
    <div class="task">
      <div class="info">
      <span class="name">{{ task.name }}</span><br>
      <small *ngIf="task.status === 'TODO'">DODANO: {{ task.addedDate | date:'dd.MM.YYYY \o HH:mm' }}</small>
      <small *ngIf="task.status === 'DOING'">ROZPOCZĘTO: {{ task.startDate | date:'dd.MM.YYY \o HH:mm' }}</small>
      <small *ngIf="task.status === 'DONE'">ZAKOŃCZONO: {{ task.endDate | date:'dd.MM.YYY \o HH:mm' }}</small>
      </div>
      <div class="status">
        <select name="" id="" (change)="onStatusChange($event)">
          <option value="TODO" [selected]="task.status === 'TODO'">to do</option>
          <option value="DOING" [selected]="task.status === 'DOING'">w trakcie</option>
          <option value="DONE" [selected]="task.status === 'DONE'">zrobione</option>
        </select>
      </div>

    </div>
  `,
  styles: [
    `
      .task {
        padding: 4px 8px;
        background-color: #fdfdfd;
        border-radius: 4px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 6px;
        display: flex;
        align-items: center;
      }

      .task .status {
        margin-left: auto;
      }

      .task .status select {
        padding: 8px;
        border: solid 1px rgba(0, 0, 0, 0.4);
        border-radius: 4px;
      }

      .task .name {
        font-size: 20px;
        margin-bottom: 8px;
      }

      .task .circle {
        border: solid 1px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .task.done {
        opacity: 0.5;
      }
      .task.done span {
        text-decoration: line-through;
      }

      .task.done .circle {
        background-color: rgb(62, 189, 62);
      }
    `,
  ],
})
export class TaskComponent {
  @Input() task!: any;

  constructor(private projectService: ProjectService) {}

  onStatusChange(event: any) {
    if (event.target.value === "DOING") {
      this.projectService.setTaskDoing(this.task._id).subscribe((result) => {
        console.log(result);
      })
    } else if (event.target.value === "DONE") {
      this.projectService.setTaskDone(this.task._id).subscribe((result) => {
        console.log(result);
      })
    }
  }
}
