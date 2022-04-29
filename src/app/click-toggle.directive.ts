import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickToggle]'
})
export class ClickToggleDirective {

  class = 'is-active';

  constructor(private el: ElementRef) {
  }

  @HostListener('click') click() {
    this.el.nativeElement.classList.toggle(this.class);
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: Element) {
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside) {
      this.el.nativeElement.classList.remove(this.class);
    }
  }
}
