import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/security/components/login-page/login-page.component';
import { RegisterPageComponent } from './modules/security/components/register-page/register-page.component';
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { NewCampaignComponent } from './modules/manage-campaign/components/new-campaign/new-campaign.component';
import { ListCampaignsComponent } from './modules/manage-campaign/components/list-campaigns/list-campaigns.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavigationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/navigation/navigation.module').then(m => m.NavigationModule)  
      },
      {
        path: 'campaign/list',
        // loadChildren: () => import('./modules/manage-campaign/manage-campaign.module').then(m => m.ManageCampaignModule),
        component: ListCampaignsComponent,
      },
      {
        path: 'setting',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'files',
        loadChildren: () => import('./modules/manage-files/manage-files.module').then(m => m.ManageFilesModule)
      }
      ,
      {
        path: 'transactions',
        loadChildren: () => import('./modules/manage-transactions/manage-transactions.module').then(m => m.ManageTransactionsModule)
      }
    ],
  },
  { 
    path: 'full', 
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/full/full.module').then(m => m.FullModule),
      },
      {
        path: 'campaign',
        loadChildren: () => import('./modules/manage-campaign/manage-campaign.module').then(m => m.ManageCampaignModule),
      },
      {
        path: 'campaign/new',
        component: NewCampaignComponent,
      }
    ]
  },
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) ,
  },
  { 
    path: 'security',   
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      }, 
      {
        path: 'register',
        component: RegisterPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
