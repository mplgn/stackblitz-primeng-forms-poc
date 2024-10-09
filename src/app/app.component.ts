import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { Lara } from 'primeng/themes/lara';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    FloatLabelModule,
    Select,
    TextareaModule,
    DatePickerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Lara });
  }

  title = 'PrimeNG Form POC';

  colors = [
    { name: 'Red', value: 1 },
    { name: 'Orange', value: 2 },
    { name: 'Yellow', value: 3 },
    { name: 'Green', value: 4 },
    { name: 'Blue', value: 5 },
    { name: 'Indigo', value: 6 },
    { name: 'Violet', value: 7 },
  ];

  newWidget: Widget = {
    selectedColor: null,
    selectedDate: null,
    comment: '',
  };

  saveWidget(form: NgForm) {
    console.log('saveWidget', form);
    console.log('form.controls', form.controls);
  }
}

type Widget = {
  selectedColor: number | null;
  selectedDate: Date | null;
  comment: string;
};
