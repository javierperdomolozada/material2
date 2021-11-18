import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const routes: Routes = [
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'botones', component: BotonesComponent },

  { path: '', redirectTo: 'snackbar', pathMatch: 'full' },
  { path: '**', component: SnackbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
