import { Component } from '@angular/core';
import { Item } from '../models/item.interface';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {
  items: Item[] = [
    {
      name: 'Apple',
      description: `An apple is an edible fruit produced by an apple tree (Malus domestica). 
        Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.`,
      isActive: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Alice_%28apple%29.jpg/1024px-Alice_%28apple%29.jpg'
    },
    {
      name: 'Orange',
      description: 'An orange is a fruit of various citrus species in the family Rutaceae.',
      isActive: true,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1280px-Oranges_-_whole-halved-segment.jpg'
    },
    {
      name: 'Banana',
      description: `A banana is an elongated, edible fruit botanically a berry – 
        produced by several kinds of large herbaceous flowering plants in the genus Musa. 
        In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.`,
      isActive: false
    }
  ];
  currentImageUrl?: string;
}
