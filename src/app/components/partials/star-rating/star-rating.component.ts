import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: string[] = [];

  ngOnChanges() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= this.rating) {
        this.stars.push('filled');
      } else {
        this.stars.push('empty');
      }
    }
  }
}
