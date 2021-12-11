import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterWrapper } from '../react/Counter/CounterWrapper';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CounterWrapper],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
