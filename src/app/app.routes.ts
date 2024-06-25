import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: ListComponent },
    { path: 'form', component: FormComponent },
    { path: 'edit/:id', component: EditItemComponent },
    { path: '**', component: NotFoundComponent },
];
