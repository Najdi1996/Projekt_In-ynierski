import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { MainComponent } from './main/main.component';
import { Twoje_kontoComponent } from './twoje_konto/twoje_konto.component';
import { PomocComponent } from './pomoc/pomoc.component';
import { OgloszeniaComponent } from './ogloszenia/ogloszenia.component';
import { OcenyComponent } from './oceny/oceny.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TerminarzComponent } from './terminarz/terminarz.component';
import { FinanseComponent } from './finanse/finanse.component';
import { Materialy_szkolenioweComponent } from './materialy_szkoleniowe/materialy_szkoleniowe.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [										
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    KalendarzComponent,
    MainComponent,
      Twoje_kontoComponent,
      PomocComponent,
      OgloszeniaComponent,
      FinanseComponent,
      TerminarzComponent,
      OcenyComponent,
      TopbarComponent,
      FinanseComponent,
      Materialy_szkolenioweComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    FullCalendarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
