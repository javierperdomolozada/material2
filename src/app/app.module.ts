import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { BotonesComponent } from './botones/botones.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, SnackbarComponent, BotonesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
