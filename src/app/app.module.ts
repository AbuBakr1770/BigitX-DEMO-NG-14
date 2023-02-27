import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
// import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { CountComponent } from './component/count/count.component';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';
import { ClientsComponent } from './component/clients/clients.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { CtaComponent } from './component/cta/cta.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TeamComponent } from './component/team/team.component';
import { PriceComponent } from './component/price/price.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component'
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavnavnavComponent } from './component/navnavnav/navnavnav.component';
// import { Collapse } from '@ng-bootstrap/ng-bootstrap/collapse';

// import {CardModule} from 'primeng/card';

@NgModule({

  declarations: [
    AppComponent,
    CountComponent,
    HeaderComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    ServicesComponent,
    CtaComponent,
    TestimonialsComponent,
    PortfolioComponent,
    TeamComponent,
    PriceComponent,
    FaqsComponent,
    ContactComponent,
    FooterComponent,
    NavnavnavComponent,
  ],
  imports: [
    BrowserModule,
    NgxAnimatedCounterModule,
    SwiperModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbAccordionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NgxNavbarModule
    // CardModule,
    // ToolbarModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
