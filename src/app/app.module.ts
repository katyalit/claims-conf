import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiPageFormComponent } from './multi-page-form/multi-page-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { IntroTextComponent } from './intro-text/intro-text.component';
import { TextPagesFourSixComponent } from './text-pages-four-six/text-pages-four-six.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiPageFormComponent,
    HeaderComponent,
    IntroTextComponent,
    TextPagesFourSixComponent,
   
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
