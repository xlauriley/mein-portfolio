import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';
import { WindowComponent } from '../../components/window/window.component';
import { DesktopIconComponent } from '../../components/desktop-icon/desktop-icon.component';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';
import { WindowInstance } from '../../models/window.model';
import { DesktopIcon } from '../../models/desktop-icon.model';
import { DESKTOP_ICONS } from '../../data/desktop-icons.data';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    CommonModule,
    WindowComponent,
    DesktopIconComponent,
    TaskbarComponent
  ],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent implements OnInit {

  desktopIcons = DESKTOP_ICONS;
  windows: any;

  constructor(public windowService: WindowService) {
    this.windows = this.windowService.windows;
  }

  ngOnInit(): void {
    // Home-Fenster direkt beim Start öffnen
    this.windowService.openWindow({
      id: 'home',
      title: 'Home',
      icon: 'icons/computer.png',
      type: 'home',
      data: {},
      position: { x: 150, y: 50 },
      size: { width: 550, height: 350 }
    });
  }

  trackWindow(index: number, win: WindowInstance): string {
    return win.id;
  }

  onIconDoubleClick(icon: DesktopIcon): void {
    let width = 700;
    let height = 500;

    if (icon.type === 'text') {
      width = 500;
      height = 400;
    } else if (icon.type === 'about') {
      width = 650;
      height = 550;
    } else if (icon.type === 'home') {
      width = 550;
      height = 350;
    } else if (icon.type === 'minesweeper') {
        width = 300;
        height = 350;
    }

    this.windowService.openWindow({
      id: icon.id,
      title: icon.label,
      icon: icon.iconImg || '',
      position: { x: 300 + Math.random() * 200, y: Math.random() * 100 },
      size: {width, height},
      type: icon.type,
      data: icon.data
    });
  }
}
