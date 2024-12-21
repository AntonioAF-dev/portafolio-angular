import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { FechaComponent } from './components/fecha/fecha.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DigitalClockComponent   
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    DesktopComponent,
    FechaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
