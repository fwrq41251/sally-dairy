import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantTableComponent } from './plant-table/plant-table.component';
import { PlantItemModalComponent } from './plant-item-modal/plant-item-modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteItemModalComponent } from './delete-item-modal/delete-item-modal.component';
import { DatePipe } from '@angular/common';
import { ItemLogModalComponent } from './item-log-modal/item-log-modal.component';
import { StarTagComponent } from './star-tag/star-tag.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlantTableComponent,
    PlantItemModalComponent,
    PageNotFoundComponent,
    PlantDetailComponent,
    DeleteItemModalComponent,
    ItemLogModalComponent,
    StarTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
