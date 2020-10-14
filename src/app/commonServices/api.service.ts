import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ApiUrl=environment.baseURL;
  constructor(private http:HttpClient) { }

  postJson(){
    return this.http.get(this.ApiUrl+'login')
    .pipe(map(res=>{console.log(res,"res")}));
  }
}
