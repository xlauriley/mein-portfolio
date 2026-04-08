import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopIcon } from '../../models/desktop-icon.model';

@Component({
  selector: 'app-desktop-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss'
})
export class DesktopIconComponent {

  @Input() icon!: DesktopIcon;
  @Output() doubleClicked = new EventEmitter<DesktopIcon>();

  isSelected: boolean = false;
  private clickTimeout: any;

  onClick(): void {
    this.isSelected = true;

    // Einfacher Klick → nur auswählen
    // Doppelklick wird durch zweiten Klick innerhalb 300ms erkannt
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;
      this.doubleClicked.emit(this.icon);
    } else {
      this.clickTimeout = setTimeout(() => {
        this.clickTimeout = null;
      }, 300);
    }
  }
}
