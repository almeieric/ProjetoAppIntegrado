import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';



const routes: Routes = [
  {path: 'cadastro', component:EditComponent },
  {path: 'lista', component:ListComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
