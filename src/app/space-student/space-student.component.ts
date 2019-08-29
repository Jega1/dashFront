import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-space-student',
  templateUrl: './space-student.component.html',
  styleUrls: ['./space-student.component.scss']
})
export class SpaceStudentComponent implements OnInit {

  student: any;



  constructor(private rout: ActivatedRoute, public api: ApiService) {

    let id = this.rout.snapshot.params['id'] // on recupere l'id dans l'url
    // on l'envoie au service qui va ensuite l'envoyer au serveur
    console.log("AAAAAAA")
    this.api.getStudentById(id).subscribe(res => {
      // cette variable est a variable en haut
      this.student = res;
      //  console.log(this.student)
    })
   }

  ngOnInit() {
  }

}
