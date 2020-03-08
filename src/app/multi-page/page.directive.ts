import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[page]'
})
export class PageDirective implements Page, OnInit{

  @Input() of: PageLogger;
  @Input() name: string;
  num: number;
  isVisible: boolean = true; // When created all pages are visible. 

  private visibleDisplayStyle: string;


  constructor (private el: ElementRef) {
    // store display style to re-apply in show()
    this.visibleDisplayStyle = el.nativeElement.style.display; 
  }


  ngOnInit(){
    // add bootstrap css classes for hiding
    if (this.el){
      this.el.nativeElement.classList.add('fade');
      this.el.nativeElement.classList.add('show');
    }

    this.num = this.of.logPage(this);
    
  }

  hide(){
    this.isVisible = false;
    if (this.el){
      this.el.nativeElement.classList.remove('show');// will start fade animation
      setTimeout(() => this.el.nativeElement.style.display ='none', 150);// when animation ends (0.15s) stop taking up place

    }
  }
  show(){
    this.isVisible = true;
    
    if (this.el){
      // when previous page animation ends (0.15s) - display
      setTimeout(() => {
        this.el.nativeElement.classList.add('show');
        //return to initial style
        this.el.nativeElement.style.display=this.visibleDisplayStyle;
      }, 150);
    }
    
  }
  scrollIntoView() {
    setTimeout(() => this.el.nativeElement.scrollIntoView(), 160);
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
  scrollIntoView(): void;
}

export function getCurrentPage(){
  const visible = this.pages.filter( (page: Page) => page.isVisible );
  if (visible.length == 1){
    return visible[0];
  } else if (visible > 1) {
    return {name: 'multiple'}
  }
  return null;
}