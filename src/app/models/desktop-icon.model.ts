export interface DesktopIcon {
  id: string;
  label: string;
  icon?: string;
  iconImg?: string;
  type: 'folder' | 'text' | 'project' | 'home' | 'about';
  data?: any;
}
