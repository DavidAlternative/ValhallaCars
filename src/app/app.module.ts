import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { OffersComponent } from './feature/offers/offers.component';
import { BrandsComponent } from './feature/brands/brands.component';
import { CampaignsComponent } from './feature/campaigns/campaigns.component';
import { DealershipComponent } from './feature/dealership/dealership.component';
import { ShoppingToolsComponent } from './feature/shopping-tools/shopping-tools.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    OffersComponent,
    BrandsComponent,
    CampaignsComponent,
    DealershipComponent,
    ShoppingToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
