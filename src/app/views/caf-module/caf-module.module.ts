import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafModuleRoutingModule } from './caf-module-routing.module';
import { CafComponent } from './caf/caf.component';
import { ApplicationHistoryComponent } from './application-history/application-history.component';


@NgModule({
  declarations: [
    CafComponent,
    ApplicationHistoryComponent
  ],
  imports: [
    CommonModule,
    CafModuleRoutingModule
  ]
})
export class CafModuleModule { }
