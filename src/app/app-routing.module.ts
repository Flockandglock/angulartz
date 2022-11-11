import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransComponent } from './trans/trans.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
    {path: '', component: TransComponent},
    {path: 'type', component: TypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
