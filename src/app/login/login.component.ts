import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    isStudent: false,
    email: "",
    password: ""
   }

  constructor(public api: ApiService, private router: Router) { }


  login() {

    if (this.user.isStudent) {
      console.log(this.user)
      this.api.loginStu(this.user).subscribe(res => {
        console.log("DEV")
        console.log(res)

      })
    } else {
      this.api.loginProf(this.user).subscribe(res => {
        console.log("Prof")
        this.router.navigate(['listStu'])

        console.log(res)
        
      })
    }
  }

  ngOnInit() {
  }

}
