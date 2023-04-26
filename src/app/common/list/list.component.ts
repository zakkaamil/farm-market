import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() header: string;
  @Input() items: Item[];
  @Output() itemSelected: EventEmitter<Item> = new EventEmitter();

  onListItemSelected(eventItem: Item): void {
    this.itemSelected.emit(eventItem)
  }
}
