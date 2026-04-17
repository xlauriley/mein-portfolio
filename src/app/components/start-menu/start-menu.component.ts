import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';
import { AuthService } from '../../services/auth.service';
import { DESKTOP_ICONS } from '../../data/desktop-icons.data';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {

  @Output() closed = new EventEmitter<void>();

  constructor(
    private windowService: WindowService,
    private authService: AuthService
  ) {}

  private getIcon(id: string) {
    return DESKTOP_ICONS.find(icon => icon.id === id);
  }

  openHome(): void {
    const icon = this.getIcon('home');
    if (icon) this.openFromIcon(icon);
  }

  openProjects(): void {
    const icon = this.getIcon('projects');
    if (icon) this.openFromIcon(icon);
  }

  openAbout(): void {
    const icon = this.getIcon('about');
    if (icon) this.openFromIcon(icon);
  }

  openContact(): void {
    const icon = this.getIcon('contact');
    if (icon) this.openFromIcon(icon);
  }

  openCredits(): void {
    const icon = this.getIcon('credits');
    if (icon) this.openFromIcon(icon);
  }

  openMinesweeper(): void {
    const icon = this.getIcon('minesweeper');
    if (icon) this.openFromIcon(icon);
  }

  openPaint(): void {
    const icon = this.getIcon('paint');
    if (icon) this.openFromIcon(icon);
  }

  openTrash(): void {
    const icon = this.getIcon('trash');
    if (icon) this.openFromIcon(icon);
  }

  onLogout(): void {
    this.windowService.windows.set([]);
    this.authService.logout();
    this.closed.emit();
  }

  private openFromIcon(icon: any): void {
    this.windowService.openWindow({
      id: icon.id,
      title: icon.label,
      iconImg: icon.iconImg,
      type: icon.type,
      data: icon.data,
      position: {
        x: 120 + Math.random() * 150,
        y: 20
      },
      size: {
        width: icon.type === 'text' ? 500 : 700,
        height: icon.type === 'text' ? 400 : 500
      }
    });
    this.closed.emit();
  }
}
