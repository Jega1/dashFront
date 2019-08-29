import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-space-student',
  templateUrl: './space-student.component.html',
  styleUrls: ['./space-student.component.scss']
})
export class SpaceStudentComponent implements OnInit {

  student: any =[]



  constructor(private rout: ActivatedRoute, public api: ApiService) {

    let id = this.rout.snapshot.params['id']
      console.log("space student componentsdddddddddddddddddddddddddddddddddddddd")
        this.api.getStudentById(id).subscribe(res => {
          this.student = res;
           console.log(res)
       })
   }

  // this.api.getStudents().subscribe(res => {
  //   console.log(res)
  //   this.students = res;
  // })
 

  ngOnInit() {
  }

}
