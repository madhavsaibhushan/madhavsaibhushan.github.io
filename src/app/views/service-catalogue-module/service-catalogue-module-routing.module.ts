import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { PaymentAgreementComponent } from './payment-agreement/payment-agreement.component';
import { PgaRegistrationComponent } from './pga-registration/pga-registration.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Service Catalogue'
    }, 
    children: [
      {
        path: '',
        redirectTo: 'recent-transactions'
      },
      {
        path: 'recent-transactions',
        component: RecentTransactionsComponent,
        data: {
          title: 'Recent Transactions'
        }
      },
      {
        path: 'service-catalogue',
        component: ServiceCatalogueComponent,
        data: {
          title: 'Service Catalogue'
        }
      },
      {
        path: 'payment-agreement',
        component: PaymentAgreementComponent,
        data: {
          title: 'Payment Agreement'
        }
      },
      {
        path: 'pga-registration',
        component: PgaRegistrationComponent,
        data: {
          title: 'PGA Registration'
        }
      },
      {
        path: 'company-details',
        component: CompanyDetailsComponent,
        data: {
          title: 'Company Details'
        }
      },
      {
        path: 'pofile-setting',
        component: ProfileSettingComponent,
        data: {
          title: 'Profile Setting'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCatalogueModuleRoutingModule { }
