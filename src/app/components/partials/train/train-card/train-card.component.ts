import { Component } from '@angular/core';

@Component({
  selector: 'app-train-card',
  templateUrl: './train-card.component.html',
  styleUrls: ['./train-card.component.scss']
})
export class TrainCardComponent {

  days: string[] = ['Mon', 'Tue', 'Wed','Thur','Fri','Sat','Sun'];
}
