import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  toggleMenu() {
    let menu = document.getElementById('context-menu') as HTMLElement;
    menu.classList.toggle('context-menu-active');
    menu.classList.toggle('context-menu');
  }

}
