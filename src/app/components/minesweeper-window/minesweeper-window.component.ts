import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minesweeper-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minesweeper-window.component.html',
  styleUrl: './minesweeper-window.component.scss'
})
export class MinesweeperWindowComponent implements AfterViewInit {

  @ViewChild('gameContainer') gameContainer!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.gameContainer.nativeElement;

    const gameDiv = document.createElement('div');
    gameDiv.className = 'minesweeper-game';
    gameDiv.setAttribute('data-preset', 'intermediate');
    container.appendChild(gameDiv);

    const script = document.createElement('script');
    script.src = 'https://minesweeper.github.io/a70de4b14c0109772a9dc7a4d43a2657210cc7d1.js';
    document.body.appendChild(script);
  }
}
