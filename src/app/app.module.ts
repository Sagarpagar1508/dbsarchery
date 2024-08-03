import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CoachComponent } from './coach/coach.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { NationalplayerComponent } from './nationalplayer/nationalplayer.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SumedhComponent } from './interNationalplayer/sumedh/sumedh.component';
import { YashdeepComponent } from './interNationalplayer/yashdeep/yashdeep.component';
import { TishaComponent } from './interNationalplayer/tisha/tisha.component';
import { ShubhamComponent } from './nationalplayer/shubham/shubham.component';
import { RiddhiComponent } from './nationalplayer/riddhi/riddhi.component';
import { SiddhiComponent } from './nationalplayer/siddhi/siddhi.component';
import { ShreyashComponent } from './nationalplayer/shreyash/shreyash.component';
import { SehamComponent } from './nationalplayer/seham/seham.component';
import { BholaComponent } from './nationalplayer/bhola/bhola.component';
import { PrathmeshComponent } from './nationalplayer/prathmesh/prathmesh.component';
import { AsthaComponent } from './nationalplayer/astha/astha.component';
import { StateplayeryComponent } from './stateplayery/stateplayery.component';

import { PrashikComponent } from './stateplayery/prashik/prashik.component';


import { AyushComponent } from './stateplayery/ayush/ayush.component';

import { MansiComponent } from './stateplayery/mansi/mansi.component';
import { ShukmaniComponent } from './interNationalplayer/shukmani/shukmani.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoachAppointmentComponent } from './coach-appointment/coach-appointment.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';
import { Blog3Component } from './blog/blog3/blog3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MediaComponent,
    AboutComponent,
    BlogComponent,
    CoachComponent,
    ContactusComponent,
    AchivementsComponent,
    NationalplayerComponent,
    FooterComponent,
    GalleryComponent,
  
    SumedhComponent,
    YashdeepComponent,
    TishaComponent,
    ShubhamComponent,
    RiddhiComponent,
    SiddhiComponent,
    ShreyashComponent,
    SehamComponent,
    BholaComponent,
    PrathmeshComponent,
    AsthaComponent,
    StateplayeryComponent,
    PrashikComponent,
    
    AyushComponent,
    MansiComponent,
    ShukmaniComponent,
    CoachAppointmentComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
