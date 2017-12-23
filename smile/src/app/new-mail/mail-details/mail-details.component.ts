import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MailServerService } from "../../mail-server.service";

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css']
})
export class MailDetailsComponent implements OnInit {
 @Input() form; 
 mail; 
 from; 
  constructor( private route: ActivatedRoute,private mailService: MailServerService) { console.log(this.form)}

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.mail=this.mailService.getMail(params['id']); 
      });
  this.from= this.mailService.getClient();

  }


  // delete(id) {
  //   this.mailService.deleteMail(id); 
  // }

}
