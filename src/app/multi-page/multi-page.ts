import { PageLogger, Page } from './page.directive';

export default class MultiPage implements PageLogger{

  pages: Page[] = [];

  currentPage: number = 1;
  public multiPage: PageLogger = this; // for [of] = "multiPage" syntactic sugar

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
    this.currentPage = -1;
  }

  public goToPage(num: number): void{
    if (num - 1 <= this.pages.length && num - 1 >= 0){
      this.pages[this.currentPage-1].hide();
      this.currentPage = num;
      setTimeout(() => this.pages[this.currentPage-1].show(), 200);
      
    }
  }
}
