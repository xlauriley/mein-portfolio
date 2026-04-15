import { Injectable, signal } from '@angular/core';
import { WindowInstance } from '../models/window.model';

@Injectable({ providedIn: 'root' })
export class WindowService {

  windows = signal<WindowInstance[]>([]);

  private maxZIndex = 100;

  openWindow(config: Omit<WindowInstance, 'isOpen' | 'isMinimized' | 'isMaximized' | 'zIndex' | 'isFocused'>): void {
    this.windows.update(wins => wins.map(w => ({ ...w, isFocused: false })));

    const existing = this.windows().find(w => w.id === config.id);
    if (existing) {
      this.focusWindow(config.id);
      return;
    }

    this.windows.update(wins => [...wins, {
      ...config,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      isFocused: true,
      zIndex: ++this.maxZIndex
    }]);
  }

  closeWindow(id: string): void {
    this.windows.update(wins => wins.filter(w => w.id !== id));
  }

  minimizeWindow(id: string): void {
    this.windows.update(wins => wins.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }

  maximizeWindow(id: string): void {
    this.windows.update(wins => wins.map(w =>
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }

  focusWindow(id: string): void {
    this.windows.update(wins => wins.map(w => ({
      ...w,
      isFocused: w.id === id,    // nur das fokussierte Fenster ist aktiv
      zIndex: w.id === id ? ++this.maxZIndex : w.zIndex,
      isMinimized: w.id === id ? false : w.isMinimized
    })));
  }

  updatePosition(id: string, position: { x: number; y: number }): void {
    this.windows.update(wins => wins.map(w =>
      w.id === id ? { ...w, position } : w
    ));
  }

  getOpenWindows(): WindowInstance[] {
    return this.windows().filter(w => w.isOpen);
  }
}
