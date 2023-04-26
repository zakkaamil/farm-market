import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: Item;
}
