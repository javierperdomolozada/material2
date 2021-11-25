import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-slider-toggle',
  templateUrl: './slider-toggle.component.html',
  styleUrls: ['./slider-toggle.component.css']
})
export class SliderToggleComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
