import { Directive, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as noUiSlider from 'nouislider';

@Directive({
  selector: '[appRangeSlider]'
})
export class RangeSliderDirective implements OnInit {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() startValue: number = 0;
  @Output() rangeChange = new EventEmitter<number>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const slider = this.el.nativeElement;
    noUiSlider.create(slider, {
      start: this.startValue,
      connect: true,
      range: {
        min: this.minValue,
        max: this.maxValue
      }
    });

    slider.noUiSlider.on('update', (values: number[]) => {
      const value = Array.isArray(values) ? values[0] : values;
      this.rangeChange.emit(value);
    });
  }
}