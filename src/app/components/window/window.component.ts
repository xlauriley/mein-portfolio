import {
  Component, Input, OnInit, ElementRef,
  ViewChild, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';
import { WindowInstance } from '../../models/window.model';
import { FolderWindowComponent } from '../folder-window/folder-window.component';
import { TextWindowComponent } from '../text-window/text-window.component';
import { ProjectWindowComponent } from '../project-window/project-window.component';
import { HomeWindowComponent } from '../home-window/home-window.component';
import { AboutWindowComponent } from '../about-window/about-window.component';
import { MinesweeperWindowComponent } from '../minesweeper-window/minesweeper-window.component';
import {PaintWindowComponent} from '../paint-window/paint-window.component';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [
    CommonModule,
    FolderWindowComponent,
    TextWindowComponent,
    ProjectWindowComponent,
    HomeWindowComponent,
    AboutWindowComponent,
    MinesweeperWindowComponent,
    PaintWindowComponent
  ],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent implements OnInit {

  @Input() window!: WindowInstance;
  @ViewChild('windowEl') windowEl!: ElementRef<HTMLDivElement>;

  // Drag-Zustand
  private isDragging = false;
  private dragOffsetX = 0;
  private dragOffsetY = 0;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {}

  // ── Fenster-Aktionen ────────────────────────────────────
  onFocus(): void {
    this.windowService.focusWindow(this.window.id);
  }

  onMinimize(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.minimizeWindow(this.window.id);
  }

  onMaximize(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.maximizeWindow(this.window.id);
  }

  onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.windowService.closeWindow(this.window.id);
  }

  // ── Drag & Drop ─────────────────────────────────────────
  onTitlebarMousedown(event: MouseEvent): void {

    if (event.button !== 0) return;

    if (this.window.isMaximized) return;

    this.isDragging = true;
    this.dragOffsetX = event.clientX - this.window.position.x;
    this.dragOffsetY = event.clientY - this.window.position.y;

    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const x = event.clientX - this.dragOffsetX;
    const y = event.clientY - this.dragOffsetY;

    const maxX = globalThis.innerWidth - 200;
    const maxY = globalThis.innerHeight - 40;

    this.windowService.updatePosition(this.window.id, {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY))
    });
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }
}
