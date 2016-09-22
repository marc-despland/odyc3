import { Component } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [DragulaService]
 })
export class AppComponent { 
  email = '';
  log = '';
  public logosid: Array<int>=[1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { 
  }

  sendGame() {
  	this.log= this.email +"<br>";
  	for (var i = 0; this.logosid.length > i; i++) {
  		this.log += " "+ this.logosid[i];
  	}
  }
  
} 