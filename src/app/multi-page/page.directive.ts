import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[page]'
})
export class PageDirective implements Page, OnInit{

  constructor (private el: ElementRef) {
    this.display = el.nativeElement.style.display;
  }

  @Input() of: PageLogger;
  @Input() name: string;
  num: number;
  isVisible: boolean = true; // When created all pages are visible. 

  display: string;

  ngOnInit(){
    if (this.el){
      this.el.nativeElement.classList.add('fade');
      this.el.nativeElement.classList.add('show');
    }

    this.num = this.of.logPage(this);
    
  }

  hide(){
    this.isVisible = false;
    if (this.el){
      this.el.nativeElement.classList.remove('show');
      setTimeout(() => this.el.nativeElement.style.position ='absolute', 200);

    }
  }
  show(){
    this.isVisible = true;
    if (this.el){
      this.el.nativeElement.classList.add('show');
      this.el.nativeElement.style.position ='relative'
    }
    this.el.nativeElement.style.display=this.display;
  }
}

export interface PageLogger {
  logPage(page: Page): number;
}


export interface Page {
  num: number;
  name: string;
  isVisible:boolean;
  hide(): void;
  show(): void;
  goTo?(): void;
}

export function getCurrentPage(){
  const visible = this.pages.filter( (page) => page.isVisible );
  if (visible.length){
    return visible[0];
  }
  return null;
}