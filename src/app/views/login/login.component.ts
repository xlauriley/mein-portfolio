import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter<void>();

  isLeaving: boolean = false;
  adminShaking: boolean = false;

  onGuestLogin(): void {
    this.isLeaving = true;
    setTimeout(() => {
      this.loginSuccess.emit();
    }, 800);
  }

  // Punkt 2: Schütteln wenn Admin angeklickt wird
  onAdminClick(): void {
    if (this.adminShaking) return;
    this.adminShaking = true;
    setTimeout(() => {
      this.adminShaking = false;
    }, 500);
  }
}
