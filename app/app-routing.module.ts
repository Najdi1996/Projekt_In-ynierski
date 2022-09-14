import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { Twoje_kontoComponent } from './twoje_konto/twoje_konto.component';
import { PomocComponent } from './pomoc/pomoc.component';
import { OgloszeniaComponent } from './ogloszenia/ogloszenia.component';
import {FinanseComponent} from './finanse/finanse.component';
import { OcenyComponent } from './oceny/oceny.component';
import { TerminarzComponent } from './terminarz/terminarz.component';
import { Materialy_szkolenioweComponent } from './materialy_szkoleniowe/materialy_szkoleniowe.component';

const routes: Routes = [
  {path:'',  redirectTo:'/user/login', pathMatch:'full'},
  {
    path:'user', component:UserComponent,
    
    children:[
      {path:'registration', component:RegistrationComponent},
      {path:'login', component:LoginComponent}
    ]
  },
  {path: 'home', component:HomeComponent,

  children:[
    {path:'',  redirectTo:'main', pathMatch:'full'},
    {path: 'twoje_konto', component:Twoje_kontoComponent},
    {path: 'pomoc', component:PomocComponent},
    {path: 'ogloszenia', component:OgloszeniaComponent},
    {path: 'finanse', component:FinanseComponent},
    {path: 'kalendarz', component:KalendarzComponent},
    {path: 'oceny', component:OcenyComponent},
    {path: 'main', component:MainComponent},
    {path: 'terminarz', component:TerminarzComponent},
    {path: 'materialy_szkoleniowe', component:Materialy_szkolenioweComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
