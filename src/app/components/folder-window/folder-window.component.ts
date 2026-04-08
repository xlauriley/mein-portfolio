import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from '../../services/window.service';

interface FolderItem {
  id: string;
  label: string;
  icon: string;
  iconImg?: string;
  type: 'folder' | 'text' | 'project';
  data?: any;
}

@Component({
  selector: 'app-folder-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-window.component.html',
  styleUrl: './folder-window.component.scss'
})
export class FolderWindowComponent implements OnInit {

  @Input() data: any;

  navigationStack: FolderItem[][] = [];
  currentItems: FolderItem[] = [];
  currentPath: string[] = [];
  selectedItem: FolderItem | null = null;

  private lastClickId: string | null = null;
  private lastClickTime: number = 0;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    this.currentItems = this.data?.children || [];
    console.log('FolderWindow Items:', this.currentItems);
  }

  onItemClick(event: MouseEvent, item: FolderItem): void {
    event.stopPropagation();

    const now = Date.now();
    const isDoubleClick =
      this.lastClickId === item.id && (now - this.lastClickTime) < 400;

    if (isDoubleClick) {
      this.lastClickId = null;
      this.lastClickTime = 0;
      this.openItem(item);
    } else {
      this.lastClickId = item.id;
      this.lastClickTime = now;
      this.selectedItem = item;
    }
  }

  openItem(item: FolderItem): void {
    if (item.type === 'folder') {
      this.navigationStack.push([...this.currentItems]);
      this.currentPath.push(item.label);
      this.currentItems = item.data?.children || [];
      this.selectedItem = null;

    } else if (item.type === 'text') {
      this.windowService.openWindow({
        id: item.id,
        title: item.label,
        icon: item.icon,
        type: 'text',
        data: item.data,
        position: { x: 150 + Math.random() * 100, y: 100 + Math.random() * 80 },
        size: { width: 500, height: 400 }
      });

    } else if (item.type === 'project') {
      this.windowService.openWindow({
        id: item.id,
        title: item.label,
        icon: item.icon,
        type: 'project',
        data: item.data,
        position: { x: 150 + Math.random() * 100, y: 100 + Math.random() * 80 },
        size: { width: 750, height: 550 }
      });
    }
  }

  onContentClick(event: MouseEvent): void {
    this.selectedItem = null;
  }

  goBack(): void {
    if (this.navigationStack.length > 0) {
      this.currentItems = this.navigationStack.pop()!;
      this.currentPath.pop();
      this.selectedItem = null;
    }
  }

  goUp(): void {
    this.goBack();
  }
}
