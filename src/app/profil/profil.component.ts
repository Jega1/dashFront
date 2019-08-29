import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  student : any;
  projet : any = {
    owner: this.rout.snapshot.params['id'],
    name: null,
    comment: null,
    note:null
  }


  constructor(private rout: ActivatedRoute, public api: ApiService ) {
    
    let id = this.rout.snapshot.params['id'] // on recupere l'id dans l'url
    // on l'envoie au service qui va ensuite l'envoyer au serveur
    console.log("AAAAAAA")
    this.api.getStudentById(id).subscribe(res => {
      // cette variable est a variable en haut
      this.student = res;
    //  console.log(this.student)
    })
   }


   createProjet(){
     this.api.createProjet(this.projet).subscribe(projet=>{
       console.log(projet)
     })
   }

  ngOnInit() {

  }

}
