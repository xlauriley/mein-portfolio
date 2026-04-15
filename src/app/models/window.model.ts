export interface WindowInstance {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  type: 'folder' | 'text' | 'project' | 'home' | 'about' | 'minesweeper' | 'paint';
  data?: any;
}
