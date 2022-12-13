import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AadharCardComponent } from './aadhar-card/aadhar-card.component';
import { UpdatePhoneComponent } from './aadhar-card/update-phone/update-phone.component';

//Configure the path for routing

export const routes: Routes = [
  {path:'update',component:AadharCardComponent},
  {path: 'phoneNo/:aadharNumber', component:UpdatePhoneComponent},
  {path: '**', pathMatch:'full', redirectTo:'/update'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
