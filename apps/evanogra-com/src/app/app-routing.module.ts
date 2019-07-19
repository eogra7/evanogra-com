import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';


const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'dashboard' },
  { 
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', component: DashboardComponent, outlet: 'content-outlet' },
    ] 
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  declarations: [ DashboardComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
