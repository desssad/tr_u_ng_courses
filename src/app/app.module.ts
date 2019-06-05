import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Lesson43Module} from './lesson43/lesson43.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogDeleteComponent} from './lesson43/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    // DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    Lesson43Module,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
