import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-bike',
  templateUrl: './view-bike.component.html',
  styleUrls: ['./view-bike.component.css']
})
export class ViewBikeComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewBike().subscribe(
      (data)=>{
        this.viewBike=data
      }
    )
  }

  viewBike:any=[]
  ngOnInit(): void {
  }

}
