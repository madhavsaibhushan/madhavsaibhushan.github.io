import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportModuleRoutingModule } from './transport-module-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { SearchTransporterComponent } from './search-transporter/search-transporter.component';
import { MyRequestComponent } from './my-request/my-request.component';


@NgModule({
  declarations: [
    PaymentComponent,
    SearchTransporterComponent,
    MyRequestComponent
  ],
  imports: [
    CommonModule,
    TransportModuleRoutingModule
  ]
})
export class TransportModuleModule { }
