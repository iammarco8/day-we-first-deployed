import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Home2Component } from './pages/home2/home2.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

const routes: Routes = [
  {path:'index',title:'homepage', component: HomeComponent},
  {path:'about', title:'about our brand', component: AboutUsComponent},
  {path:'services', title:'the services needed', component: ServicesComponent},
  {path:'studentInfo', title:'the studentInfo needed', component: Home2Component},
  {path:'studentdetail/:id', title:'the student-detail', component:  StudentDetailComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
