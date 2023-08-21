import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  imgPath = '../../../assets/autorization-page-img.jpg';
  model: any={};

  ngOnInit(): void {
  }

  singup() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancel');
  }
}
