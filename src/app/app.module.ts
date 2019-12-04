import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HiveHomeComponent } from './hive-home/hive-home.component';
import { BookSlotsComponent } from './book-slots/book-slots.component';
import { ReportsComponent } from './reports/reports.component';
import { SlotRegistrationFormComponent } from './slot-registration-form/slot-registration-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGaurdService } from 'src/services/guards/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule,MatButtonModule, MatCheckboxModule, MatSelectModule,MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HiveHomeComponent,
    BookSlotsComponent,
    ReportsComponent,
    SlotRegistrationFormComponent,
    HomePageComponent,
    LoginComponent,
    ContactUsComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatFormFieldModule,MatInputModule,MatCardModule, MatButtonModule, MatCheckboxModule,MatSelectModule, ChartsModule,ShowHidePasswordModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([
      { path: "booking", component: BookSlotsComponent,canActivate:[AuthGaurdService] },
      { path: "reports", component: ReportsComponent, canActivate:[AuthGaurdService] },
      { path: "register", component: SlotRegistrationFormComponent },
      { path: "login", component: LoginComponent},
      { path: "logout", component: LogoutComponent},
      { path: "home", component: HomePageComponent },
      { path: "contact", component: ContactUsComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
