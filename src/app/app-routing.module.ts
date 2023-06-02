import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'clientDetails/:id', component: ClientFormComponent},
  { path: 'createClient', component: ClientFormComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
