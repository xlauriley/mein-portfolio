import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-window.component.html',
  styleUrl: './about-window.component.scss'
})
export class AboutWindowComponent {

  @Input() data: any;

  activeTab: string = 'cv';

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  // Hilfsmethode statt direktem Vergleich im Template
  isTab(tab: string): boolean {
    return this.activeTab === tab;
  }
}
