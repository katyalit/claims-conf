import { PageLogger, Page } from './page.directive';

export default class MultiPage implements PageLogger{

  pages: Page[] = [];

  currentPage: number = 1;
  public showingAllPages:boolean = false;
  public multiPage: MultiPage = this; // for [of] = "multiPage" syntactic sugar

  logPage(page: Page): number{
    const pageNum = this.pages.push(page);
    if (pageNum !== this.currentPage){
      page.hide();
    }  
    page.goTo = () => {
      this.goToPage(pageNum);
    }

    return pageNum;
  }


  public nextPage(){
    this.goToPage(this.currentPage + 1)
  }
  public previousPage(){
    this.goToPage(this.currentPage - 1);
  }

  public showAllPages(): void {
    this.pages.forEach( (page) => page.show());
    this.showingAllPages = true;
  }
  public hideAllPages(): void {
    this.pages.forEach( (page: Page) =>  {
      if (page.num !== this.currentPage) {
      page.hide();
      }
    });
    this.showingAllPages = false;
  }

  public goToPage(num: number): void{
    if (this.showAllPages) {
      this.hideAllPages();
    }
    if (num - 1 <= this.pages.length && num - 1 >= 0 ) {
      this.pages[this.currentPage-1].hide();
      this.currentPage = num;
      this.pages[this.currentPage-1].show();
      
    }
  }
}
