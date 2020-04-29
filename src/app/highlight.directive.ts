import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') myBackgroundColor : string;

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseOver() {
    this.myBackgroundColor = 'yellow';
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.myBackgroundColor = 'transparent'; 
  }
}



