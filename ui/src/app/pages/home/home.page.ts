import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  arrowStates: { [key: string]: { up: boolean, down: boolean, secondUp: boolean, secondDown: boolean }} = {};

  ngOnInit() {
    ['P', 'A', 'P', 'E', 'R'].forEach(letter => {
      this.arrowStates[letter] = { up: false, down: false, secondUp: false, secondDown: false };
    });
  }

  changePrimaryColor(event: Event, letter: string, direction: 'up' | 'down') {
    const clickedClass = direction === 'up' ? 'clicked-up' : 'clicked-down';
    this.toggleClass(event, clickedClass);
    this.arrowStates[letter][direction] = !this.arrowStates[letter][direction];
  }

  changeSecondaryColor(event: Event, letter: string, direction: 'up' | 'down') {
    const clickedClass = direction === 'up' ? 'clicked-up' : 'clicked-down';
    const secondaryDirection = `second${direction.charAt(0).toUpperCase() + direction.slice(1)}` as keyof typeof this.arrowStates[typeof letter];
    this.toggleClass(event, clickedClass);
    this.arrowStates[letter][secondaryDirection] = !this.arrowStates[letter][secondaryDirection];
  }

  showSecondUpArrow(letter: string): boolean {
    return this.arrowStates[letter]?.up || false;
  }

  showSecondDownArrow(letter: string): boolean {
    return this.arrowStates[letter]?.down || false;
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
