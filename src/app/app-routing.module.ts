import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { NewTicketComponent } from '../app/components/new-ticket/new-ticket.component';
import { OverviewComponent } from '../app/components/overview/overview.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: 'full'},
  {path: "inicio", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "new-ticket", component: NewTicketComponent, canActivate: [AuthGuard]},
  {path: "overview", component: OverviewComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "users-list", component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
