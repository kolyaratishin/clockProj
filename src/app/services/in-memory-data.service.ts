import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const img=[
      {color:"red",rate:5,name:"English clock 1",price:120},
      {color:"yellow",rate:4,name:"English clock 2",price:150},
      {color:"green",rate:1,name:"English clock 3",price:1120},
      {color:"purple",rate:7,name:"Swiss clock 1",price:390},
      {color:"pink",rate:9,name:"Swiss clock 2",price:999},
      {color:"gray",rate:89,name:"Swiss clock 3",price:600},
      {color:"yellow",rate:100,name:"Ukrainian clock 1",price:550},
      {color:"green",rate:15,name:"Ukrainian clock 2",price:798},
      {color:"purple",rate:34,name:"Ukrainian clock 3",price:990},
      {color:"pink",rate:55,name:"Belgian clock 1",price:36},
      {color:"red",rate:53,name:"Belgian clock 2",price:99},
      {color:"yellow",rate:49,name:"Belgian clock 3",price:85},
      {color:"green",rate:13,name:"Russian clock 1",price:230},
      {color:"purple",rate:88,name:"Russian clock 2",price:540},
      {color:"pink",rate:68,name:"Russian clock 3",price:60},
      {color:"red",rate:51,name:"Moldovian clock 1",price:489},
      {color:"yellow",rate:42,name:"Moldovian clock 2",price:420},
      {color:"green",rate:19,name:"Moldovian clock 3",price:743},
      {color:"purple",rate:75,name:"American clock 1",price:593},
      {color:"pink",rate:99,name:"American clock 2",price:740},
  ];
    return{img};
  }
  constructor() { }
}