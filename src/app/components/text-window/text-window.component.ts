import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactLink {
  iconImg?: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-text-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-window.component.html',
  styleUrl: './text-window.component.scss'
})
export class TextWindowComponent implements OnInit {

  @Input() data: any;

  isContact: boolean = false;
  isCredits: boolean = false;
  contactLinks: ContactLink[] = [];

  ngOnInit(): void {
    this.isContact = this.data?.type === 'contact';
    this.isCredits = this.data?.type === 'credits';

    if (this.isContact) {
      this.contactLinks = this.data?.links || [];
    }
  }
}
