import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGauge, faMoneyBillTransfer, faLineChart, faWallet, faChartSimple, faMoneyBillTrendUp, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  gaugeIcon = faGauge;
  moneyTransfetIcon = faMoneyBillTransfer;
  chartInvestIcon = faLineChart;
  walletIcon = faWallet;
  chartIcon = faChartSimple;
  icon = faMoneyBillTrendUp;
  logoutIcon = faRightToBracket;


  constructor(private accountService: AccountService, private router: Router) { }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/login']);

  }
}