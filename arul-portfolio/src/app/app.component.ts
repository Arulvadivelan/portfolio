import { Component } from '@angular/core';
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { EditorComponent } from './components/editor/editor.component';
import { ActivitySection } from './components/activity-bar/activity-bar.component';
import { portfolioFiles } from './data/portfolio-files';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ActivityBarComponent,
    ExplorerComponent,
    EditorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedSection: ActivitySection = 'about';
  selectedFile = 'README.md';

  selectSection(section: ActivitySection) {
    this.selectedSection = section;

    const firstFile = portfolioFiles.find(
      file => file.section === section
    );

    if (firstFile) {
      this.selectedFile = firstFile.name;
    }
  }
}