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

  activeTab: string = 'ich';

  isTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  // Steckbrief Daten
  steckbrief = [
    { label: 'Name',         value: 'Laura Lautenschläger' },
    { label: 'Spitzname',    value: 'Lauri' },
    { label: 'Wohnort',      value: 'Nähe von Mannheim' },
    { label: 'Geburtstag',   value: '03.02.2000' },
    { label: 'Sternzeichen', value: 'Wassermann' },
    { label: 'Lieblingsfarbe', value: 'Lila, Grün & Pink' },
    { label: 'Status',       value: 'Open for Work' }
  ];
}
