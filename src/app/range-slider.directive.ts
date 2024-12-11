import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as noUiSlider from 'nouislider';

@Directive({
  selector: '[appRangeSlider]'
})
export class RangeSliderDirective implements OnInit {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() startValue: number = 1000; // Initial range values
  @Output() rangeChange: EventEmitter<number> = new EventEmitter();

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

    slider.noUiSlider.on('update', (values: number) => {
      const maxValue = values;
      this.rangeChange.emit(maxValue);
    });
  }
}