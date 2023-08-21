import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
    console.log('MainLayoutComponent constructor called');
  }

  ngOnInit() { }


}
