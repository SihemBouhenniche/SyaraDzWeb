import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../../model/admin.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService  {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public login(username:string,password:string){

    interface LoginResponse {
      token: string;
    }
    let data = {
      email : username,
      password : password,
    }

    return this.http.post<LoginResponse>(this.ROOT_URL+'/admins/login',
    data
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  public logout(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    this.http.delete(this.ROOT_URL+'/admins/logout',{
      headers: header
    }).subscribe(
      res => {
        console.log(res);
        window.localStorage.setItem("accesToken", "");
      },
      err => {
        console.log(err);
      }
    );
  }

  public showMe() : Observable<Admin>{

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Admin>(this.ROOT_URL+'/me',
    { headers: header }
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}