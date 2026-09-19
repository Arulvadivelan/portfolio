import {Input, Component, EventEmitter, Output } from '@angular/core';
import { PortfolioFile } from '../../models/portfolio-file';
import { portfolioFiles } from '../../data/portfolio-files';
import { CommonModule } from '@angular/common';
import { ActivitySection } from '../activity-bar/activity-bar.component';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent {

  @Input() selectedSection: ActivitySection = 'about';

  @Output() fileSelected = new EventEmitter<string>();

  selectFile(fileName: string) {
    this.fileSelected.emit(fileName);
  }

  get files(): PortfolioFile[] {
    return portfolioFiles.filter(
      file => file.section === this.selectedSection
    );
  }

  getFileIcon(type: PortfolioFile['type']): string {
    switch (type) {
      case 'typescript':
        return 'TS';

      case 'json':
        return '{ }';

      case 'markdown':
       return 'ⓘ';

      default:
        return '•';
    }
  }
}