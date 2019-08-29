import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent}  from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { SpaceProfComponent } from './space-prof/space-prof.component';
import { ProfilComponent } from './profil/profil.component';
import { SpaceStudentComponent } from './space-student/space-student.component';


const routes: Routes = [
    { path: 'inscription', 
      component: InscriptionComponent 
    },
   { path: 'login', 
      component: LoginComponent
     },
  {
    path: 'listStu',
    component: SpaceProfComponent
  },
  {
    path: 'profil/:id',
    component: ProfilComponent
  },
  {
    path: 'getStudent',
    component: SpaceStudentComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
