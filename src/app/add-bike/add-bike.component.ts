import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
