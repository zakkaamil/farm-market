import { Component } from '@angular/core';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent {
  items: Item[] = [
    {
      name: 'Tomato',
      description: `The tomato is the edible berry of the plant 
        Solanum lycopersicum, commonly known as the tomato plant. 
        The species originated in western South America, Mexico, 
        and Central America.`,
      isActive: true,
      price: 15
    },
    {
      name: 'Potato',
      description: `The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas.`,
      isActive: false
    },
    {
      name: 'Carrot',
      description: 'The carrot is a root vegetable.',
      isActive: true,
      price: 8
    }
  ];
  selectedItemPrice?: number;
}
