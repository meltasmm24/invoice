import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../commonServices/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private api:ApiService) { }

  ngOnInit(){
  }

  onLogin(){
    this.api.postJson().subscribe((res:any)=>{
      console.log(res,"res");
    })
  }

}
