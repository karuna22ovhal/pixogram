import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  render3: boolean;
  ren3 = true;
  saveEmployee3(empform: NgForm) {
    console.log("Hello")


    this.render3 = true;

    this.ren3 = false;
  }

}
