import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PortfolioFile } from '../../models/portfolio-file';
import { portfolioFiles } from '../../data/portfolio-files';
import { tokenizeTypeScript } from '../../utils/typescript-syntax';
import { tokenizeJson } from '../../utils/json-syntax';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent implements OnChanges {

  @Input() selectedFile = 'README.md';

  @Output() fileSelected = new EventEmitter<string>();

  @ViewChild('tabBar')
  tabBar!: ElementRef<HTMLDivElement>;

  files: PortfolioFile[] = portfolioFiles;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFile']) {
      setTimeout(() => {
        this.scrollToSelectedTab();
      });
    }
  }

  selectFile(fileName: string) {
    this.fileSelected.emit(fileName);
  }

  get currentFile(): PortfolioFile | undefined {
    return portfolioFiles.find(
      file => file.name === this.selectedFile
    );
  }

  isHeading(line: string): boolean {
    return line.trim().startsWith('#');
  }

  tokenizeLine(line: string) {
    if (this.currentFile?.type === 'typescript') {
      return tokenizeTypeScript(line);
    }

    if (this.currentFile?.type === 'json') {
      return tokenizeJson(line);
    }

    return [
      {
        text: line,
        type: 'normal' as const
      }
    ];
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

  scrollToSelectedTab() {
    if (!this.tabBar) {
      return;
    }

    const tab = this.tabBar.nativeElement.querySelector(
      `[data-file="${this.selectedFile}"]`
    ) as HTMLElement | null;

    if (tab) {
      tab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }

  isBulletLine(line: string): boolean {
    return line.trim().startsWith('- ');
  }
}