import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { IgxExcelModule } from 'igniteui-angular-excel/ES5/igx-excel-module';
import { IgxSpreadsheetModule } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxExcelModule,
    IgxSpreadsheetModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
