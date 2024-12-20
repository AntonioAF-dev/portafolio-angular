import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { WindowComponent } from './components/window/window.component';
import { FechaComponent } from './components/fecha/fecha.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DigitalClockComponent   
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DesktopComponent,
    WindowComponent,
    FechaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
