import { Component, Input, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
 
  public data

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.url.subscribe(() => {
      this.data = this.route.snapshot.firstChild?.data;
    });
    this.router.events.subscribe(path => {
      console.log( this.data = this.route.snapshot.firstChild?.data);
    });
  }
 
  @Input() title = '';
}
