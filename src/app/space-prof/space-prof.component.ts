import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-space-prof',
  templateUrl: './space-prof.component.html',
  styleUrls: ['./space-prof.component.scss']
})
export class SpaceProfComponent implements OnInit {


  listStu: any = {
    name:"",
    email: "",
    password: "",
    class: "",
    projet: [{
      note: Number,
      body: String,
      date: Date
    }],
    absence: [{
      date: Date,
      why:""
    }],
   late: [{
      date: Date,
       why: ""
    }]

  }


  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}
