import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(
    private httpClient:HttpClient
  ) {
  }
  private imgUrl="/api/img";
  public getImg():Observable<any>{
    return this.httpClient.get<any>(this.imgUrl)
}
}
