import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { IncluirExtratoComponent } from './pages/extrato/incluir-extrato/incluir-extrato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
},
{
    path: 'extrato',
    component: ExtratoComponent
},
{
  path: 'incluir-extrato',
  component: IncluirExtratoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
