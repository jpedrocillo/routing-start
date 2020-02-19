import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, CanActivateChild } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    {
    path: ':id', component: UserComponent
    }]
  },
  { path: 'servers', canActivateChild: [AuthGuard],  component: ServersComponent, children:
    [
      { path: ':serverId', component: ServerComponent },
      { path: ':serverId/edit', component: EditServerComponent },
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
