import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {MyStackComponent} from '../my-stack/my-stack.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'mystack', component: MyStackComponent, pathMatch: 'full'},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

export const routableComponents = [
  HomeComponent,
  PageNotFoundComponent,
  MyStackComponent
];
