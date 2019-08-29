import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-space-prof',
  templateUrl: './space-prof.component.html',
  styleUrls: ['./space-prof.component.scss']
})
export class SpaceProfComponent implements OnInit {

projets: any;
  students : any = []


  constructor(public api: ApiService) {
    this.api.getStudents().subscribe(res=>{
      console.log(res)
      this.students = res;
    })

this.api.getAllProjet().subscribe(res => {
  console.log(res)
  this.projets = res
})


  }

  ngOnInit() {
  }

}
