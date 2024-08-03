import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SumedhComponent } from './interNationalplayer/sumedh/sumedh.component';
import { TishaComponent } from './interNationalplayer/tisha/tisha.component';
import { YashdeepComponent } from './interNationalplayer/yashdeep/yashdeep.component';
import { ShukmaniComponent } from './interNationalplayer/shukmani/shukmani.component';
import { NationalplayerComponent } from './nationalplayer/nationalplayer.component';
import { AsthaComponent } from './nationalplayer/astha/astha.component';
import { BholaComponent } from './nationalplayer/bhola/bhola.component';
import { PrathmeshComponent } from './nationalplayer/prathmesh/prathmesh.component';
import { RiddhiComponent } from './nationalplayer/riddhi/riddhi.component';
import { SehamComponent } from './nationalplayer/seham/seham.component';
import { ShreyashComponent } from './nationalplayer/shreyash/shreyash.component';
import { ShubhamComponent } from './nationalplayer/shubham/shubham.component';
import { SiddhiComponent } from './nationalplayer/siddhi/siddhi.component';
import { StateplayeryComponent } from './stateplayery/stateplayery.component';
import { AyushComponent } from './stateplayery/ayush/ayush.component';
import { MansiComponent } from './stateplayery/mansi/mansi.component';
import { PrashikComponent } from './stateplayery/prashik/prashik.component';
import { CoachComponent } from './coach/coach.component';
import { CoachAppointmentComponent } from './coach-appointment/coach-appointment.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';
import { Blog3Component } from './blog/blog3/blog3.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"media",component:MediaComponent},
  {path:"achivements",component:AchivementsComponent},
  {path:"about", component:AboutComponent},
  {path:"contact_us", component:ContactusComponent},
  {path:"gallery", component:GalleryComponent},
  {path:"coach_page",component:CoachComponent},
  {path:"coach_appointment",component:CoachAppointmentComponent},
  {path:"blog",component:BlogComponent},
  {path:"blog1", component:Blog1Component},
  {path:"blog2", component:Blog2Component},
  {path:"blog3", component:Blog3Component},
  // international
  {path:"sumedh", component:SumedhComponent},
  {path:"tisha", component:TishaComponent},
  {path:"yashdeep",component:YashdeepComponent},
  {path:"shukmani",component:ShukmaniComponent},
  // national
  {path:"girish",component:NationalplayerComponent},
  {path:"astha", component:AsthaComponent},
  {path:"bhola",component:BholaComponent},
  {path:"prathmesh",component:PrathmeshComponent},
  {path:"riddhi",component:RiddhiComponent},
  {path:"seham",component:SehamComponent},
  {path:"shreyash",component:ShreyashComponent},
  {path:"shubham",component:ShubhamComponent},
  {path:"siddhi",component:SiddhiComponent},
  // state

  {path:"anshul",component:StateplayeryComponent},
  {path:"ayush",component:AyushComponent},
  {path:"mansi",component:MansiComponent},
  {path:"prashik",component:PrashikComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
