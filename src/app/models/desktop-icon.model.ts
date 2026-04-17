export interface DesktopIcon {
  id: string;
  label: string;
  iconImg?: string;
  type: 'folder' | 'text' | 'project' | 'home' | 'about' | 'minesweeper' | 'paint';
  data?: any;
}
