import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafComponent } from './caf/caf.component';
import { ApplicationHistoryComponent } from './application-history/application-history.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CAF'
    },
    children: [
      {
        path: '',
        redirectTo: 'caf'
      },
      {
        path: 'caf',
        component: CafComponent,
        data: {
          title: 'CAF'
        }
      },
      {
        path: 'application-history',
        component: ApplicationHistoryComponent,
        data: {
          title: 'Application History'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafModuleRoutingModule { }
