import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProjetComponent } from './projet/projet.component';
import { SpaceProfComponent } from './space-prof/space-prof.component';
import { ProfilComponent } from './profil/profil.component';
import { PresenceComponent } from './presence/presence.component';
import { SpaceStudentComponent } from './space-student/space-student.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    ProjetComponent,
    SpaceProfComponent,
    ProfilComponent,
    PresenceComponent,
    SpaceStudentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
