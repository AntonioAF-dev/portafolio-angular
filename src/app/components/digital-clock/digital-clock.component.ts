import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  time: string = '';

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }
}
