import { Component, OnInit } from '@angular/core';
import { Register } from './models/register';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(register:Register):void{
    console.log(register);
  }

}
