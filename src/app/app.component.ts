import { Component } from '@angular/core';
import { single } from 'rxjs/operators';

import { NewsApiService } from './news-headlines/news-api.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApp';
  render: boolean;
  ren = true;
  render1= false;
  ren1 = true;

  name
  password





  saveEmployee(empform: NgForm) {
    console.log("Hello")
    this.name = empform.value.Name
    console.log(this.name)
    this.password = empform.value.Password
    console.log(this.password)

    this.render1 = true;

    this.ren1 = false;
    this.ren = false;
    this.render = false;

  }


  saveEmployee1(empform: NgForm) {
    console.log("Hello")
    

    this.render = true;

    this.ren = false;

    this.ren1 = false;
    this.render1 = false;
  }


  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
 //   this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
   // this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    //console.log("selected source is: " + source);
    //this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}

