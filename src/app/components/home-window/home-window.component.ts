import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';
import { DESKTOP_ICONS } from '../../data/desktop-icons.data';

@Component({
  selector: 'app-home-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-window.component.html',
  styleUrl: './home-window.component.scss'
})
export class HomeWindowComponent {

  constructor(private windowService: WindowService) {}

  onShortcut(id: string): void {
    const icon = DESKTOP_ICONS.find(i => i.id === id);
    if (!icon) return;

    this.windowService.openWindow({
      id: icon.id,
      title: icon.label,
      icon: icon.iconImg || '',
      type: icon.type as any,
      data: icon.data,
      position: { x: 150 + Math.random() * 150, y: 80 + Math.random() * 100 },
      size: { width: 700, height: 500 }
    });
  }
}
