import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brews: any;
  items: Array<any>= [
    { name: "Lets search"}
  ];


  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  showIng(ing: { value: any; }){
    this.items =[];
    this._http.getBeer().subscribe(data =>{
      this.brews = data;
      for(let brew in this.brews){
        console.log("all:",this.brews[brew].brewery_type)
        if(this.brews[brew].brewery_type == ing.value){
          this.items.push(this.brews[brew]);
        }
      }
    }); 
  }
  


}
