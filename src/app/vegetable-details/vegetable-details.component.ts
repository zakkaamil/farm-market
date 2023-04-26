import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable-details',
  templateUrl: './vegetable-details.component.html',
  styleUrls: ['./vegetable-details.component.scss']
})
export class VegetableDetailsComponent {
  @Input() currentPrice: number;
}
