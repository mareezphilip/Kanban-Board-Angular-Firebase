import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { DragComponent } from './components/drag/drag.component';
import { TaskdetailsComponent } from './pages/taskdetails/taskdetails.component';
import { HomeguardGuard } from './guards/homeguard.guard';

const routes: Routes = [
  {path: 'home' , component:HomeComponent },
  {path:'' , component:AuthpageComponent},
  {path:'drag' , component:DragComponent},
  {path:'tasks/:taskid' , component:TaskdetailsComponent , }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
