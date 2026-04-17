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
export class HomeWindowComponent {}
