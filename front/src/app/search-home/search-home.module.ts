import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchHomeRoutingModule } from './search-home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SearchHomeRoutingModule,
    SharedModule
  ]
})
export class SearchHomeModule { }
