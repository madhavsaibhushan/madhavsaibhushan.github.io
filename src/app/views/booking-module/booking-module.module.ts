import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingModuleRoutingModule } from './booking-module-routing.module';
import { BookingServiceProviderComponent } from './booking-service-provider/booking-service-provider.component';
import { ContainerBookingListComponent } from './container-booking-list/container-booking-list.component';
import { CroComponent } from './cro/cro.component';
import { ContainerBookingComponent } from './container-booking/container-booking.component';
import { ShippingInstructionsComponent } from './shipping-instructions/shipping-instructions.component';
import { BookingRatesComponent } from './booking-rates/booking-rates.component';
import { MyInquiriesComponent } from './my-inquiries/my-inquiries.component';


@NgModule({
  declarations: [
    BookingServiceProviderComponent,
    ContainerBookingListComponent,
    CroComponent,
    ContainerBookingComponent,
    ShippingInstructionsComponent,
    BookingRatesComponent,
    MyInquiriesComponent
  ],
  imports: [
    CommonModule,
    BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
