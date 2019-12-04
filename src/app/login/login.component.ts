import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { NgForm } from '@angular/forms';
import { VeggieHiveService } from 'src/services/veggie-hive.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private submitted = false;
  private loginData: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private veggieHiveService: VeggieHiveService) { }

  ngOnInit() {
  }

  login(loginForm) {
    let invalidLogin = false;
    this.veggieHiveService.login(loginForm.value).toPromise().then(data => {
      this.loginData = data;
      if (this.authenticationService.authenticate(this.loginData)) {
        this.router.navigate([''])
        invalidLogin = false
        this.resetForm(loginForm);
      } else {
        invalidLogin = true
        this.resetForm(loginForm);
      }
    }).catch(err => {
      this.submitted = true;
      console.log(err);
    })
  }
  /**
   * 
   * @param form Method to reset Form data
   */
  resetForm(form: NgForm) {
    if (form) {
      form.resetForm();
    }
  }
}
