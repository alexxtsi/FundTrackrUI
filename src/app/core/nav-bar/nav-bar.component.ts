import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public data: any

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.url.subscribe(() => {
      this.data = this.route.snapshot.firstChild?.data;
    });
    console.log(this.router.events)
    this.router.events.subscribe(path => {
      console.log(this.data = this.route.snapshot.firstChild?.data);
    });
  }


}
