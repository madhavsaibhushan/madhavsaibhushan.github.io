import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SearchTransporterComponent } from './search-transporter/search-transporter.component';
import { MyRequestComponent } from './my-request/my-request.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transport'
    },
    children: [
      {
        path: '',
        redirectTo: 'search-transporter'
      },
      {
        path: 'search-transporter',
        component: SearchTransporterComponent,
        data: {
          title: 'Search Transporter'
        }
      },
      {
        path: 'my-request',
        component: MyRequestComponent,
        data: {
          title: 'My Request'
        }
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          title: 'Payment'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportModuleRoutingModule { }
