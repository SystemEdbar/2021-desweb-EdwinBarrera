import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Button, EventData } from '@nativescript/core'
import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Object
  detail: Object
  constructor(private itemService: ItemService, private http: HttpClient) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      response => {
        this.items=response.photos;
        console.dir(this.items);
      },
      error => console.log(error)
    );

  }

}
