import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',component:OwnerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'setting', component: SettingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
