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
tab:Mail[]=mails; 
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
    var length= this.tab.length; 
    var mail= new Mail (length+1, 
    form.to,
    form.from, 
    form.object,
    form.core,1,0);
    this.tab.push ( mail
      
); 

   this.cpt=this.cpt+1; 
  }

  getnumberSent() {
    return this.cpt; 
  }

  getMails () {
    return  this.tab;   
  }



  public getMail(id) {
   
  for (let entry of mails) {
     if (entry.id == id) {
       return  entry
     }
}
  }
   
  public openedMail (id) {
      for (let entry of this.tab) {
     if (entry.id == id) {
        var mail= new Mail (entry.id, 
    entry.to,
    entry.from, 
    entry.object,
    entry.core,0,1);
    this.tab[entry.id-1]=mail; 
 
     }
}
  }
deleteMail (id) {
     for (let entry of this.tab) {
     if (entry.id == id) {
     this.tab.splice(id, 1);
  }
}

}

}
