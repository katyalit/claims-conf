import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiPageFormComponent } from './multi-page-form/multi-page-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './header/header.component';
import { IntroTextComponent } from './intro-text/intro-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiPageFormComponent,
    HeaderComponent,
    IntroTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
