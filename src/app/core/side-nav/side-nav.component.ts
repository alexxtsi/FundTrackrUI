import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faGauge, faMoneyBillTransfer, faLineChart, faWallet,faChartSimple,faMoneyBillTrendUp} from '@fortawesome/free-solid-svg-icons';


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
  chartIcon=faChartSimple;
  icon=faMoneyBillTrendUp

  constructor(
    private route: ActivatedRoute,
  ) { }

}
