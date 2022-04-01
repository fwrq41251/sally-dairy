import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantTableComponent } from './plant-table/plant-table.component';

const routes: Routes = [
  { path: 'plants', component: PlantTableComponent },
  { path: 'plant-detail/:itemId', component: PlantDetailComponent },
  { path: '', redirectTo: '/plants', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
