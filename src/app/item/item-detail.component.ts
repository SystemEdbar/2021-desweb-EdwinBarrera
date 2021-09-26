import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item
  sol: string
  camaraName: string
  fullName: string
  roverName: string
  landingDate: string
  launchDate: string
  status: string
  imgSrc: string
  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
          this.imgSrc= this.itemService.img
          this.sol=this.itemService.sol
          console.dir(this.sol)
          this.camaraName=this.itemService.camaraName
          this.fullName=this.itemService.fullName
          this.roverName=this.itemService.roverName
          this.landingDate=this.itemService.landingDate
          this.launchDate=this.itemService.launchDate
          this.status=this.itemService.status

  }
}
