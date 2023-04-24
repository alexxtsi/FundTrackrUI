import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import {ReportsComponent}from './components/reports/reports.component'
import{InvestmentsComponent}from './components/investments/investments.component'
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent, data: { title: 'About Me' } },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'reports', component: ReportsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
