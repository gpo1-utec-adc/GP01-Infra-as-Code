import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciliacionComponent } from './conciliacion/conciliacion.component';


const routes: Routes = [
  {path:'conciliacion',component:ConciliacionComponent},
  {path:'',redirectTo:'conciliacion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
