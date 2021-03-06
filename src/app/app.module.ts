import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlantTableComponent } from './plant-table/plant-table.component';
import { PlantItemModalComponent } from './plant-item-modal/plant-item-modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteItemModalComponent } from './delete-item-modal/delete-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantTableComponent,
    PlantItemModalComponent,
    PageNotFoundComponent,
    PlantDetailComponent,
    DeleteItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
