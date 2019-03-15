import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RaiseFundsPage } from './raise-funds.page';

const routes: Routes = [
  {
    path: '',
    component: RaiseFundsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RaiseFundsPage]
})
export class RaiseFundsPageModule {}
