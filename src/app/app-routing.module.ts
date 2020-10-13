import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamedeshboardComponent } from './component/gamedeshboard/gamedeshboard.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [{path: 'home',             component: HomeComponent},
                        {path: 'game-dashboard',             component: GamedeshboardComponent},
                        { path: '', redirectTo: 'home', pathMatch: 'full' }
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
