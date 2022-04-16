import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentedItemComponent } from './currented-item/currented-item.component';
import { CompletedItemComponent } from './completed-item/completed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentedItemComponent,
    CompletedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
