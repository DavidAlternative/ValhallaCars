import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { OffersComponent } from './feature/offers/offers.component';
import { CampaignsComponent } from './feature/campaigns/campaigns.component';
import { DealershipComponent } from './feature/dealership/dealership.component';
import { ShoppingToolsComponent } from './feature/shopping-tools/shopping-tools.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './feature/home/home.component';
import { UrusComponent } from './feature/pages/urus/urus.component';
import { VehiclesComponent } from './feature/pages/vehicles/vehicles.component';
import { NewModelsComponent } from './feature/pages/new-models/new-models.component';
import { BrandsComponent } from './feature/pages/brands/brands.component';
import { OwnersComponent } from './feature/pages/owners/owners.component';
import { UserModule } from './feature/pages/user/user.module';
import { VehicleComponent } from './feature/pages/vehicle/vehicle.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    OffersComponent,
    CampaignsComponent,
    DealershipComponent,
    ShoppingToolsComponent,
    HomeComponent,
    UrusComponent,
    VehiclesComponent,
    NewModelsComponent,
    BrandsComponent,
    OwnersComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
