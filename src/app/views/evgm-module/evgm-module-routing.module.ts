import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationsComponent } from './quotations/quotations.component';
import { MyWeighmentsComponent } from './my-weighments/my-weighments.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchWeightmentRequestComponent } from './search-weightment-request/search-weightment-request.component';
import { RequestForQuatationComponent } from './request-for-quatation/request-for-quatation.component';
import { WeightmentProceedComponent } from './weightment-proceed/weightment-proceed.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'eVGM'
    },
    children: [
      {
        path: '',
        redirectTo: 'quotations'
      },
      {
        path: 'quotations',
        component: QuotationsComponent,
        data: {
          title: 'Quotations'
        }
      },
      {
        path: 'my-weighments',
        component: MyWeighmentsComponent,
        data: {
          title: 'My Weighments'
        }
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          title: 'Payment'
        }
      },
      {
        path: 'search-weightment-request',
        component: SearchWeightmentRequestComponent,
        data: {
          title: 'Search Weightment Request'
        }
      },
      {
        path: 'request-for-quotation',
        component: RequestForQuatationComponent,
        data: {
          title: 'Request for Quotation'
        }
      },
      {
        path: 'weightment-proceed',
        component: WeightmentProceedComponent,
        data: {
          title: 'Weightment Proceed'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvgmModuleRoutingModule { }
