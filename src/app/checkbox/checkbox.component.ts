import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  estadoCheck:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  pulsaronLaCaja(estado:boolean){
    console.log("Pulsaron el checkBox"+estado);
  }

  pulsaronTristate(estado:boolean){
    console.log("Pulsaron el Tristate"+estado);
  }
  task: Task = {
    name: 'Neiva',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'REBAJA PLUS No. 1 NEIVA PARQUE PRINCIPAL', completed: false, color: 'primary'},
      {name: 'REBAJA No. 2 NEIVA PLAZA CIVICA', completed: false, color: 'primary'},
      {name: 'REBAJA No. 3 NEIVA CENTRO', completed: false, color: 'primary'},
      {name: 'REBAJA No. 4 NEIVA SANTA INES', completed: false, color: 'primary'},
      {name: 'REBAJA No. 5 NEIVA TIMANCO', completed: false, color: 'primary'},
      {name: 'REBAJA No. 6 NEIVA ANTIGUO SEGURO SOCIAL', completed: false, color: 'primary'},
      {name: 'REBAJA PLUS No. 3 NEIVA ALTO LLANO', completed: false, color: 'primary'},
      {name: 'REBAJA PLUS No. 4 NEIVA LAS GRANJAS', completed: false, color: 'primary'},
      {name: 'REBAJA No. 9 NEIVA LA ESTACION', completed: false, color: 'primary'},
      {name: 'REBAJA No. 10 NEIVA ALCALDIA', completed: false, color: 'primary'},
      {name: 'REBAJA PLUS No. 2 NEIVA PRADO ALTO', completed: false, color: 'primary'},
      {name: 'REBAJA No. 12 NEIVA TENERIFE', completed: false, color: 'primary'},
      {name: 'REBAJA No. 13 NEIVA BUGANVILES', completed: false, color: 'primary'},
      {name: 'REBAJA No. 14 NEIVA', completed: false, color: 'primary'},
      {name: 'REBAJA No. 15 NEIVA AVENIDA MAX DUQUE', completed: false, color: 'primary'},
      {name: 'REBAJA PLUS No. 5 NEIVA ALAMOS NORTE', completed: false, color: 'primary'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }



}




