import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingServiceProviderComponent } from './booking-service-provider/booking-service-provider.component';
import { ContainerBookingListComponent } from './container-booking-list/container-booking-list.component';
import { CroComponent } from './cro/cro.component';
import { ContainerBookingComponent } from './container-booking/container-booking.component';
import { ShippingInstructionsComponent } from './shipping-instructions/shipping-instructions.component';
import { BookingRatesComponent } from './booking-rates/booking-rates.component';
import { MyInquiriesComponent } from './my-inquiries/my-inquiries.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Booking'
    },
    children: [
      {
        path: '',
        redirectTo: 'booking-service-provider'
      },
      {
        path: 'booking-service-provider',
        component: BookingServiceProviderComponent,
        data: {
          title: 'Booking Service Provider'
        }
      },
      {
        path: 'container-booking-list',
        component: ContainerBookingListComponent,
        data: {
          title: 'Container Booking List'
        }
      },
      {
        path: 'cro',
        component: CroComponent,
        data: {
          title: 'CRO'
        }
      },
      {
        path: 'container-booking',
        component: ContainerBookingComponent,
        data: {
          title: 'Container Booking'
        }
      },
      {
        path: 'shipping-instructions',
        component: ShippingInstructionsComponent,
        data: {
          title: 'Shipping Instructions'
        }
      },
      {
        path: 'booking-rates',
        component: BookingRatesComponent,
        data: {
          title: 'Booking Rates'
        }
      },
      {
        path: 'my-inquiries',
        component: MyInquiriesComponent,
        data: {
          title: 'My Inquiries'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
