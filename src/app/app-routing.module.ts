import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { ReportsComponent } from './components/reports/reports.component'
import { InvestmentsComponent } from './components/investments/investments.component'
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'transactions', component: TransactionsComponent, data: { title: 'Transactions' } },
      { path: 'investments', component: InvestmentsComponent, data: { title: 'Investments' } },
      { path: 'reports', component: ReportsComponent, data: { title: ' Reports' } },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
