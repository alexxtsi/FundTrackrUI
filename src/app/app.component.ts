import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FundTrackrUI';
  users: any

  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers() {
    this.http.get('https://localhost:5002/api/Users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    });
  }
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return
    const user: User = JSON.parse(userString);
    this.accountService.setCurrenUser(user);
  }
}
