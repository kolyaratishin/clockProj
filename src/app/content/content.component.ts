import { Component, OnInit } from '@angular/core';
import {ImgService} from '../services/img.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  inputValue:string;
    public imgs: Array<any>;
    page:number=1;
    collectionSize:number;
    constructor(private imgService: ImgService){
        this.imgs=new Array<any>()
        this.loadPage();
    }
    sortUp(){
        this.imgs.sort((a, b) => a.rate > b.rate ? 1 : -1);
    }
    sortDown(){
        this.imgs.sort((a, b) => a.rate < b.rate ? 1 : -1);
    }
    loadPage(){;
        this.imgService.getImg().subscribe(imgs =>{
        this.imgs=imgs;
        this.collectionSize=imgs.length;
        });
    }
    divClick(){
      alert("Good choice!");
    }

}
