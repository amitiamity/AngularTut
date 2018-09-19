import {WelcomeComponent} from './welcome/welcome/welcome.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouteModule {}
