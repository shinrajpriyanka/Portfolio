import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  imports: [CommonModule],
  templateUrl: './bubbles.component.html',
  styleUrl: './bubbles.component.scss'
})
export class BubblesComponent {
  bubbles = Array.from({ length: 30 }, () => ({
    size: `${Math.random() * 40 + 10}px`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.2,
    speed: `${Math.random() * 10 + 8}s`,
  }));
expression: any;
}

