import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener("mousein") MouseIn(){

  }
  @HostListener("mouseouty") mouceout(){

  }

  constructor() { }

}
