import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.scss']
})
export class FruitDetailsComponent {
  @Input() imageUrl: string;
}
