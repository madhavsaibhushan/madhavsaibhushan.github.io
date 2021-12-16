import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCatalogueModuleRoutingModule } from './service-catalogue-module-routing.module';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { PaymentAgreementComponent } from './payment-agreement/payment-agreement.component';
import { PgaRegistrationComponent } from './pga-registration/pga-registration.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    ServiceCatalogueComponent,
    RecentTransactionsComponent,
    PaymentAgreementComponent,
    PgaRegistrationComponent,
    CompanyDetailsComponent,
    ProfileSettingComponent
  ],
  imports: [
    CommonModule,
    ServiceCatalogueModuleRoutingModule,
    TabsModule.forRoot(),
  ]
})
export class ServiceCatalogueModuleModule { }
