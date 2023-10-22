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
    const id = element.id;

    const clickedClass = id === "up" ? 'clicked-up' : 'clicked-down';
    
    if (element.classList.contains(clickedClass)) {
      element.classList.remove(clickedClass);
    } else {
      element.classList.add(clickedClass);
    }
  }
}
