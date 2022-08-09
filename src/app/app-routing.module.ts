import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { BrandsComponent } from './feature/pages/brands/brands.component';
import { NewModelsComponent } from './feature/pages/new-models/new-models.component';
import { OwnersComponent } from './feature/pages/owners/owners.component';
import { UrusComponent } from './feature/pages/urus/urus.component';
import { UserComponent } from './feature/pages/user/user.component';
import { VehicleComponent } from './feature/pages/vehicle/vehicle.component';
import { VehiclesComponent } from './feature/pages/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: 'Home',
    component:HomeComponent
  },
  {
    path: 'Vehicles',
    component:VehiclesComponent
  },
  {
    path: 'New',
    component:NewModelsComponent
  },
  {
    path: 'Urus',
    component:UrusComponent
  },
  {
    path: 'Brands',
    component:BrandsComponent
  },
  {
    path: 'Owners',
    component:OwnersComponent
  },
  {
    path:'Register',
    component:UserComponent
  },
  {
    path: 'vehicle/:id',
    component: VehicleComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
