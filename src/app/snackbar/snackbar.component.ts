
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  sbRef?: MatSnackBarRef<TextOnlySnackBar> | undefined;

  constructor(private sb: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar1() {
    this.sb.open('Hola amigos....!!!', '', { duration: 2000 });
  }

  openSnackBar2() {
    this.sb.open('Hola amigos....!!!', 'Deacuerdo?');
  }

  openSnackBar3() {
    this.sbRef = this.sb.open(
      'Esta seguro que desea borrar los registros',
      'Cancelar',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      }
    );

    this.sbRef.afterDismissed().subscribe(() => {
      console.log('Los registros se han borrado.');
    });

    this.sbRef.onAction().subscribe(() => {
      console.log('Se canceló el borrado de los registros.');
    });
  }
}
