import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ObservedValueOf, of } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imgPath = '../../../assets/autorization-page-img.jpg';
  model: any = {};
  //currentUser$: Observable<User | null> = of(null); using accountService.currentUser | async from the tamplate 

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
   // this.currentUser$ = this.accountService.currenUser$;
  }
  getCurrentUser() {
    this.accountService.currenUser$.subscribe({
      error: error => console.log(error)
    })
  }
  longin() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
