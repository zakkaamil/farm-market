import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() header: string;
  @Input() items: Item[];
}
