import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    MainLayoutComponent,
    TransactionsComponent,
    LoginComponent,
    InvestmentsComponent,
    ReportsComponent,
    NavBarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbDropdown,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
