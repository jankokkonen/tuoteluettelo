import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
