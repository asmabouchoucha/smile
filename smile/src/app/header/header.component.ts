import { Component, OnInit } from '@angular/core';
import { MailServerService } from "../mail-server.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cpt; 
  constructor(private mailService: MailServerService) { }

  ngOnInit() {

    this.cpt=this.mailService.getnumberSent(); 

  }

}
