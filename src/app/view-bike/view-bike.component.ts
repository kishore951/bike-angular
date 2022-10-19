import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bike',
  templateUrl: './view-bike.component.html',
  styleUrls: ['./view-bike.component.css']
})
export class ViewBikeComponent implements OnInit {

  constructor() { }

  viewBike=[{"id":1,"bikeName":"Himalayan","company":"Royal Enfield","description":"Adventure"},{"id":2,"bikeName":"Duke","company":"Ktm","description":"Racing"},{"id":3,"bikeName":"mt15","company":"yamaha","description":"naked"},{"id":4,"bikeName":"splendour","company":"hero","description":"economical"}]

  ngOnInit(): void {
  }

}
