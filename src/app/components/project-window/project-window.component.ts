import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './project-window.component.html',
  styleUrl: './project-window.component.scss'
})
export class ProjectWindowComponent implements OnInit {

  @Input() data: any;

  project!: Project;
  currentIndex: number = 0;

  get allImages(): string[] {
    return this.project.images;
  }

  ngOnInit(): void {
    this.project = this.data as Project;
    this.currentIndex = 0;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.allImages.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.allImages.length) % this.allImages.length;
  }
}
