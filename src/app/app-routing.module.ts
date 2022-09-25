import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/component/sign-in/sign-in.component';
import { SignUpComponent } from 'src/component/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'sign-up',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
