import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MailServerService } from "../mail-server.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor( private mailService: MailServerService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form:NgForm){
    this.mailService.setClient(form.value.mail); 

 this.router.navigate(['/inbox']);  
  }

}
