import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvgmModuleRoutingModule } from './evgm-module-routing.module';
import { QuotationsComponent } from './quotations/quotations.component';
import { MyWeighmentsComponent } from './my-weighments/my-weighments.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchWeightmentRequestComponent } from './search-weightment-request/search-weightment-request.component';
import { RequestForQuatationComponent } from './request-for-quatation/request-for-quatation.component';
import { WeightmentProceedComponent } from './weightment-proceed/weightment-proceed.component';


@NgModule({
  declarations: [
    QuotationsComponent,
    MyWeighmentsComponent,
    PaymentComponent,
    SearchWeightmentRequestComponent,
    RequestForQuatationComponent,
    WeightmentProceedComponent
  ],
  imports: [
    CommonModule,
    EvgmModuleRoutingModule
  ]
})
export class EvgmModuleModule { }
