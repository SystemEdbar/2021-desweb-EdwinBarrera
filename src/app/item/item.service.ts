import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Item } from './item'


@Injectable({
  providedIn: 'root',
})
export class ItemService {
public url: string
    constructor(private http: HttpClient){

    }

  getItems(): Observable<Object> {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY");
  }

  getDetail(): Observable<Object> {
      console.dir(this.url)
      return this.http.get(this.url);

    }

    getItem(id: number): Item {
      return this.items.filter((item) => item.id === id)[0]
    }

}
