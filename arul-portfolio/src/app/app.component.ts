import { Component } from '@angular/core';
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { EditorComponent } from './components/editor/editor.component';
import { ActivitySection } from './components/activity-bar/activity-bar.component';
import { portfolioFiles } from './data/portfolio-files';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
  isExplorerOpen = false;

  selectSection(section: ActivitySection) {
    this.selectedSection = section;

    const firstFile = portfolioFiles.find(
      file => file.section === section
    );

    if (firstFile) {
      this.selectedFile = firstFile.name;
    }
  }

  toggleExplorer() {
    this.isExplorerOpen = !this.isExplorerOpen;
  }

  closeExplorer() {
    this.isExplorerOpen = false;
  }
}