import {Input, Component, EventEmitter, Output } from '@angular/core';

export type ActivitySection =
  | 'about'
  | 'projects'
  | 'skills'
  | 'contact';

@Component({
  selector: 'app-activity-bar',
  imports: [],
  templateUrl: './activity-bar.component.html',
  styleUrl: './activity-bar.component.css'
})
export class ActivityBarComponent {

  @Input() selectedSection: ActivitySection = 'about';
  
  @Output() sectionSelected = new EventEmitter<ActivitySection>();

  selectSection(section: ActivitySection) {
    this.sectionSelected.emit(section);
  }
}
