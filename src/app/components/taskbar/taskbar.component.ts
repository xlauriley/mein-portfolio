import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';
import { WindowInstance } from '../../models/window.model';
import { StartMenuComponent } from '../start-menu/start-menu.component';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule, StartMenuComponent],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent implements OnInit {

  windows: any;
  showStartMenu: boolean = false;
  currentTime: string = '';
  currentDate: string = '';

  private clockInterval: any;

  constructor(public windowService: WindowService) {
    this.windows = this.windowService.windows;
  }

  ngOnInit(): void {
    this.updateClock();
    // Uhr jede Minute aktualisieren
    this.clockInterval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
  }

  private updateClock(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });
    this.currentDate = now.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  toggleStartMenu(): void {
    this.showStartMenu = !this.showStartMenu;
  }

  closeStartMenu(): void {
    this.showStartMenu = false;
  }

  onTaskbarItemClick(win: WindowInstance): void {
    if (win.isMinimized) {
      // Minimiertes Fenster wiederherstellen
      this.windowService.focusWindow(win.id);
    } else {
      // Sichtbares Fenster minimieren
      this.windowService.minimizeWindow(win.id);
    }
  }
}
