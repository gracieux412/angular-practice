import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Testing } from './testing/testing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Testing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dream-ap');
}
 