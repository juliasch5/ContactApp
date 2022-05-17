import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'contact', redirectTo: 'contact/index', pathMatch: 'full' },
  { path: 'contact/list', component: ListComponent },
  { path: 'contact/:contactId/details', component: DetailsComponent },
  { path: 'contact/create', component: CreateComponent },
  { path: 'contact/:contactId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
