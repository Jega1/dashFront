import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export  class InscriptionComponent implements OnInit {
  user: any = {
    isStudent: false,
    name: "",
    email: "",
    password: "",
    classe: "",
    telephone: ""

  }
  constructor(public api: ApiService, private router: Router) { }

register(){

  if(this.user.isStudent){
    this.api.registerStudent(this.user).subscribe(res=>{
      this.router.navigate(['login'])
      console.log(res)
    })

  }else {
    this.api.registerProf(this.user).subscribe(res => {
      this.router.navigate(['login'])
      console.log(res +'ddddddd')
    })
  }
}

  ngOnInit() {
  }

  
}
