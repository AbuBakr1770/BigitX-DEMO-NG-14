import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


// Primeng Modules
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NavbarComponent } from './navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';

import { SwiperModule } from 'swiper/angular';
// import { Navbar2Component } from './component/navbar2/navbar2.component';

// import { MdbNavbarModule } from 'mdb-angular-ui-kit/navbar';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { AboutComponent } from './component/about/about.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ContactComponent } from './component/contact/contact.component';
import { CountComponent } from './component/count/count.component';
import { CtaComponent } from './component/cta/cta.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PriceComponent } from './component/price/price.component';
import { ServicesComponent } from './component/services/services.component';
import { TeamComponent } from './component/team/team.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Testimonials2Component } from './testimonials2/testimonials2.component';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel'
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // Navbar2Component,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    CountComponent,
    CtaComponent,
    FaqsComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    PortfolioComponent,
    PriceComponent,
    ServicesComponent,
    TeamComponent,
    TestimonialsComponent,
    Testimonials2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    BrowserAnimationsModule,
    NgxAnimatedCounterModule,
    MdbCarouselModule,
    RippleModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    PanelMenuModule,
    MdbCollapseModule,
    MdbAccordionModule,
    SwiperModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
