import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
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
        console.log(this.items)
      },
      error => console.log(error)
    );

  }
    postHttp(EventData) :string {
            return 'https'+ EventData.split('http')[1]
        }

    onTap(sol:string,camaraName:string, fullName:string, roverName:string, img:string, landingDate:string, launchDate:string, status:string) {
        this.itemService.sol= sol
        this.itemService.img='https'+ img.split('http')[1]
        console.dir(this.itemService.img)
        this.itemService.camaraName= camaraName
        this.itemService.fullName= fullName
        this.itemService.roverName= roverName
        this.itemService.landingDate= landingDate
        this.itemService.launchDate= launchDate
        this.itemService.status= status

    }
}
