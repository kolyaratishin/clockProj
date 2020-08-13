import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  inputValue:string;
  showAlert(){
    alert(this.inputValue + ", your are subscribed!")
  }

}
