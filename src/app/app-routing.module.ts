import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantTableComponent } from './plant-table/plant-table.component';

const routes: Routes = [
  { path: 'plants', component: PlantTableComponent },
  { path: 'plant-detail', component: PlantTableComponent },
  { path: '', redirectTo: '/plants', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
