import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { TransferBadgeComponent } from './transfer-badge/transfer-badge.component';

const routes: Routes = [
  { path: '', redirectTo: '/badges', pathMatch: 'full' },
  { path: 'badges', component: BadgesComponent },
  { path: 'transferBadge/:name', component: TransferBadgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
