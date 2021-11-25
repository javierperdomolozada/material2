import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BotonesComponent } from './botones/botones.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SliderToggleComponent } from './slider-toggle/slider-toggle.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const routes: Routes = [
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'botones', component: BotonesComponent },
  { path: 'badge', component: BadgeComponent},
  { path: 'botton-togle', component: ButtonToggleComponent},
  { path: 'chips', component: ChipsComponent},
  { path: 'radio-button', component: RadioButtonComponent},
  { path: 'slider-toggle', component: SliderToggleComponent},
{ path: 'check', component: CheckboxComponent},
  { path: '', redirectTo: 'snackbar', pathMatch: 'full' },
  { path: '**', component: SnackbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
