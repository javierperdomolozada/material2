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
import { BadgeComponent } from './badge/badge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SliderToggleComponent } from './slider-toggle/slider-toggle.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [AppComponent, SnackbarComponent, BotonesComponent, BadgeComponent, ButtonToggleComponent, ChipsComponent, RadioButtonComponent, SliderToggleComponent, CheckboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
