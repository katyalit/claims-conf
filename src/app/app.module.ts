import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiPageFormComponent } from './multi-page-form/multi-page-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'
import { IntroTextComponent } from './intro-text/intro-text.component';
import { TextPagesFourSixComponent } from './text-pages-four-six/text-pages-four-six.component';
import{ NavDropdownComponent } from './multi-page/nav-dropdown/nav-dropdown.component';
import { NavTabsComponent } from './multi-page/nav-tabs/nav-tabs.component';
import { PageDirective } from './multi-page/page.directive';


@NgModule({
  declarations: [
    AppComponent,
    MultiPageFormComponent,
    IntroTextComponent,
    TextPagesFourSixComponent,
    NavDropdownComponent,
    NavTabsComponent,
    PageDirective
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
