import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-new-models',
  templateUrl: './new-models.component.html',
  styleUrls: ['./new-models.component.css']
})
export class NewModelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public vehiclesOffers: Models[] = [
    {id: 5, model: "Gladiator", offer: 349990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2022/05/GLADIATOR-RUBICOM-rojo-1-1-1.png"},
    {id: 3, model: "Commander", offer: 194990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2022/07/commander_menu.png"},
    {id: 1, model: "Renegade", offer: 99990000, image: "https://www.jeep.com.co/wp-content/uploads/sites/2/2020/11/renegade.jpg"},
  ]


  formatPrice(price: number){
    let formatedPrice = new Intl.NumberFormat().format(price)
    return formatedPrice
  }
}
