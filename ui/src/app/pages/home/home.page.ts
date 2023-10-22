import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeColor(event: Event) {
    const element = event.target as HTMLElement;
    if (element.classList.contains('clicked')) {
      element.classList.remove('clicked');
    } else {
      element.classList.add('clicked');
    }
  }
}
