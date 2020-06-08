import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'cadastro', component: CadastroComponent  },
  { path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'produto', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
