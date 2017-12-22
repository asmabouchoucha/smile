import { Component, OnInit } from '@angular/core';
import { MailServerService } from "../mail-server.service";
import { NgForm } from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent implements OnInit {

  constructor(private mailService: MailServerService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form:NgForm){
   

     this.router.navigate(['/sentMails']); 
     this.mailService.sendMail(form.value); 

  
  }

  

}
