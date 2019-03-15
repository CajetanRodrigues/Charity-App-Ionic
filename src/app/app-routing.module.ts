import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home-page/home-page.module#HomePagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },

  { path: 'home-results/:category', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },

  { path: 'home-page', loadChildren: './pages/home-page/home-page.module#HomePagePageModule' },
  { path: 'single-charity/:id', loadChildren: './pages/single-charity/single-charity.module#SingleCharityPageModule' },

  { path: 'single-charity', loadChildren: './pages/single-charity/single-charity.module#SingleCharityPageModule' },
  { path: 'raise-funds', loadChildren: './pages/raise-funds/raise-funds.module#RaiseFundsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
