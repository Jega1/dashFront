import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server: string = "http://localhost:4043"

  constructor(private http: HttpClient) { 
    
  }


  //Register all users students and profssssss
  registerStudent(user){
    return this.http.post(this.server+"/student/registerStu", {
      user: user
    });
  }
  registerProf(user) {
    return this.http.post(this.server + "/prof/registerProf", {
      user: user
    });
  }

//Login all users
  loginStu(user) {
    console.log('OUI')
    console.log(user)
    return this.http.post(this.server + "/student/loginStu", {
        user : user
    });
  }
 loginProf(user) {
    return this.http.post(this.server + "/prof/loginProf", {
      user: user

    });
  }

//List students
          listStu(listStu) {
            console.log('OUI')
            console.log(listStu)
            return this.http.get(this.server + "/student/listStu", {
            
            });
          }

}
