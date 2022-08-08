import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient : HttpClient) { }

}
