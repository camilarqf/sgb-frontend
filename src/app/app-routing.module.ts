import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuarioListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
