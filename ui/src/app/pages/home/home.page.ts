import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  arrowStates: { [key: string]: { up: boolean, down: boolean, secondUp: boolean, secondDown: boolean }} = {};

  ngOnInit() {
    ['P', 'A', 'P', 'E', 'R'].forEach((letter, index) => {
      this.arrowStates[index] = { up: false, down: false, secondUp: false, secondDown: false };
    });
  }
  changePrimaryColor(event: Event, index: number, direction: 'up' | 'down') {
    const clickedClass = direction === 'up' ? 'clicked-up' : 'clicked-down';
    this.toggleClass(event, clickedClass);
    this.arrowStates[index][direction] = !this.arrowStates[index][direction];
  }

  changeSecondaryColor(event: Event, index: number, direction: 'up' | 'down') {
    const clickedClass = direction === 'up' ? 'clicked-up' : 'clicked-down';
    const secondaryDirection = `second${direction.charAt(0).toUpperCase() + direction.slice(1)}` as keyof typeof this.arrowStates[typeof index];
    this.toggleClass(event, clickedClass);
    this.arrowStates[index][secondaryDirection] = !this.arrowStates[index][secondaryDirection];
  }

  showSecondUpArrow(index: number): boolean {
    return this.arrowStates[index]?.up || false;
  }

  showSecondDownArrow(index: number): boolean {
    return this.arrowStates[index]?.down || false;
  }

  private toggleClass(event: Event, className: string) {
    const element = event.target as HTMLElement;
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
}
