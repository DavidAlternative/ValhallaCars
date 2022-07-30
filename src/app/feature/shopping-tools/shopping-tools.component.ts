import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/models/cards';

@Component({
  selector: 'app-shopping-tools',
  templateUrl: './shopping-tools.component.html',
  styleUrls: ['./shopping-tools.component.css']
})
export class ShoppingToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public cards: Cards[] = [
    {title: 'CURRENT OFFERS', description: 'FIND LEASE, FINANCE AND CASH OFFERS IN YOUR AREA', buttonTitle: 'SEE OFFERS', image: 'https://toyota.scene7.com/is/image/toyota/lexus-is-homepage-vehicles-tile-750x460-LEX-ISG-MY21-0121?wid=750&hei=460'},
    {title: 'CARS AVAILABLE', description: 'THE NEXT ERA OF POWER, PERFORMANCE AND INNOVATION', buttonTitle: 'EXPLORE', image: 'https://toyota.scene7.com/is/image/toyota/Lexus-nextNX-Homepage-Tile-750x460-LEX-NXG-MY22-0030_M75-1?wid=750&hei=460'},
    {title: 'BRANDS WE WORK WITH', description: 'DISCOVER OUR PARTNERS', buttonTitle: 'LEARN MORE', image: 'https://toyota.scene7.com/is/image/toyota/Lexus-UXh-homepage-tile-750x460-LEX-UXS-MY23-0005?wid=750&hei=460'},
  ]
}
