import { Component, OnInit } from '@angular/core';
import { MailServerService } from "../mail-server.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  mails; 
  constructor(private mailService: MailServerService) {
  //  console.log(this.mailService.getMails());
   }

  ngOnInit() {
    this.mails=this.mailService.getMails(); 
    console.log(this.mails)
  }


}
