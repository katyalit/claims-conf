import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiPageFormComponent } from './multi-page-form/multi-page-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'
import { IntroTextComponent } from './intro-text/intro-text.component';
import{ NavDropdownComponent } from './multi-page/nav-dropdown/nav-dropdown.component';
import { NavTabsComponent } from './multi-page/nav-tabs/nav-tabs.component';
import { PageDirective } from './multi-page/page.directive';
import { NavShowAllButtonComponent } from './multi-page/nav-show-all-button/nav-show-all-button.component';
import { VarDirective } from './var.directive';


@NgModule({
  declarations: [
    AppComponent,
    MultiPageFormComponent,
    IntroTextComponent,
    NavDropdownComponent,
    NavTabsComponent,
    PageDirective,
    NavShowAllButtonComponent,
    VarDirective
   
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
