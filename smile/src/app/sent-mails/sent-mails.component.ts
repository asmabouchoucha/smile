import { Component, OnInit } from '@angular/core';
import { MailServerService } from "../mail-server.service";

@Component({
  selector: 'app-sent-mails',
  templateUrl: './sent-mails.component.html',
  styleUrls: ['./sent-mails.component.css']
})
export class SentMailsComponent implements OnInit {

  mails; 
  from; 
  constructor(private mailService: MailServerService) { }

  ngOnInit() {
    this.mails=this.mailService.getMails(); 
   
  }

}
