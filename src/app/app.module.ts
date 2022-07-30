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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    OffersComponent,
    BrandsComponent,
    CampaignsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
