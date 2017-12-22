import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpModule, Http} from "@angular/http";
import {mails} from "./mails"; 

import 'rxjs/add/operator/map';
import { Mail } from "./Models/Mail";



@Injectable()
export class MailServerService {

  client;
mails; 
cpt=3 ; 
  
  constructor(
    
  ) { }

  setClient (client){

   this.client=client; 

  }

  getClient () {
    return this.client; 
  }

  sendMail(form) {
//     var mail= new Mail (30, 
//     form.to,
//     form.from, 
//     form.object,
//     form.core,1);
//     this.mails.push ( mail
      
// ); 

   this.cpt=this.cpt+1; 
  }

  getnumberSent() {
    return this.cpt; 
  }

  getMails () {
    return  mails;   
  }



  public getMail(id) {
   
  for (let entry of mails) {
     if (entry.id == id) {
       return  entry
     }
}
  }
}
