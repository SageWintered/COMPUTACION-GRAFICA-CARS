import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CascadeSelectBasicDemo } from "./cascade-selector/cascade-selector.component";
import { CheckboxIndeterminateDemo } from './check/check.component';
import { DatePickerBasicDemo } from './date/date.component';
import { SliderInputDemo } from './slider/slider.component';
import { RatingTemplateDemo } from './calification/calification.component';
import { ToggleSwitchBasicDemo } from './pull/pull.component';
import { ButtonDirectiveDemo } from './button/button.component';
import { PanelBasicDemo } from './table/table.component';
import { FloatLabelBasicDemo } from './label/label.component';
import { InputMaskBasicDemo } from './number/number.component';



@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, CascadeSelectBasicDemo, CheckboxIndeterminateDemo, DatePickerBasicDemo, SliderInputDemo, RatingTemplateDemo, ToggleSwitchBasicDemo, ButtonDirectiveDemo, PanelBasicDemo, FloatLabelBasicDemo, InputMaskBasicDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Taller 5';
  
}