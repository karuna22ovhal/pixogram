import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { MyMediaComponent } from './my-media/my-media.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UploadMediaComponent,
    MyMediaComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
