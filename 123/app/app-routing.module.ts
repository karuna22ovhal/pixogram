import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { MyMediaComponent } from './my-media/my-media.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'UploadMedia', component: UploadMediaComponent },
    { path: 'MyMedia', component: MyMediaComponent },
    { path: 'AccountDetails', component: AccountDetailsComponent }

];

@NgModule({
  imports:
    [RouterModule.forRoot(
    routes,
    { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
