import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public vehiclesOffers: Models[] = [
    {id: 1, model: "Renegade", offer: 99990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2020/11/renegade.jpg"},
    {id: 2, model: "Compass", offer: 148990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2022/03/Compass_Longitude0001-e1636470206528.png"},
    {id: 3, model: "Commander", offer: 194990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2022/07/commander_menu.png"},
    {id: 4, model: "Wrangler", offer: 295990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2020/11/wrangler.jpg"},
    {id: 5, model: "Gladiator", offer: 349990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2022/05/GLADIATOR-RUBICOM-rojo-1-1-1.png"},
  ]

  formatPrice(price: number){
    let formatedPrice = new Intl.NumberFormat().format(price)
    return formatedPrice
  }

}
