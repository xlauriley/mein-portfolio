import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-paint-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paint-window.component.html',
  styleUrl: './paint-window.component.scss'
})
export class PaintWindowComponent {}
