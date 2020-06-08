import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'produto', component: ProdutoComponent },
  { path: '', redirectTo: 'produto', pathMatch: 'full' },
  { path:'cadastro', component:CadastroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
