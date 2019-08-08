import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  user: Object = []
  constructor(public httpdata: Http) { }

  ngOnInit() { }
  resetForm() {
  }
  signup(firstname, lastname, username, password, email, mobile, prefLang) {
    this.user = [
      {
        "firstName": firstname,
        "lastName": lastname,
        "username": username,
        "password": password,
        "email": email,
        "mobile": mobile,
        "preferredLanguage": prefLang
      }
    ]


    this.httpdata.post('http://localhost:8080/user/register', this.user[0], null)
      .pipe(map(
        (response: Response) => response.text()

      )).subscribe((data) => {
        console.log(data)
      }

      )
  }
}
