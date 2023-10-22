import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  changeColor(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const id = clickedElement.id;
    
    const parentElement = clickedElement.parentElement;
    if (!parentElement) {
      return;
    }
    const oppositeArrowId = id === 'up' ? 'down' : 'up';
    const oppositeArrow = parentElement.querySelector(`#${oppositeArrowId}`) as HTMLElement;
    
    const clickedClass = id === 'up' ? 'clicked-up' : 'clicked-down';
    const oppositeClass = oppositeArrowId === 'up' ? 'clicked-up' : 'clicked-down';
    
    if (oppositeArrow.classList.contains(oppositeClass)) {
      oppositeArrow.classList.remove(oppositeClass);
      clickedElement.classList.remove(clickedClass);
    } else if (clickedElement.classList.contains(clickedClass)) {
      clickedElement.classList.remove(clickedClass);
    } else {
      clickedElement.classList.add(clickedClass);
    }
  }
}
