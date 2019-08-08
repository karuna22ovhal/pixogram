/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pixogram';
}
*/


import { Component } from '@angular/core';



import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApp';
  signup: boolean;
  login = true;

  news = false;

  name
  password





  saveEmployee(empform: NgForm) {
    console.log("Hello")
    this.name = empform.value.Name
    console.log(this.name)
    this.password = empform.value.Password
    console.log(this.password)



    this.news = true;
    this.login = false;
    this.signup = false;

  }


  saveEmployee1() {
    console.log("Hello")


    this.signup = true;

    this.login = false;

    this.news = false;

  }


  mArticles: Array<any>;
  mSources: Array<any>;

  constructor() {
    console.log('app component constructor called');
  }

  ngOnInit() {

  }

  searchArticles() {

  }

}

