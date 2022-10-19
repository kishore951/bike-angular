import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bikeName=""
  company=""
  description=""

  readValues=()=>{
    let data ={
      "bikeName":this.bikeName,
      "company":this.company,
      "description":this.description

    }
    console.log(data)
    this.myapi.addBike(data).subscribe(
      (data)=>{
        alert("successfully added")
      }
    )
    this.bikeName=""
    this.company=""
    this.description=""

  }
 


  ngOnInit(): void {
  }

}
