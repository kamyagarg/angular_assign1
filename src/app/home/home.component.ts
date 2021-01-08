import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brews: Object ={};
  new_brews: Object ={};

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
      console.log("data",data[0].brewery_type);
      for (let i in this.brews){
        // console.log("items", i);
        // console.log("type ofitems", typeof(i));
        if(data[i].brewery_type == "brewpub"){
          console.log("found");
          console.log(data[i]);
          this.new_brews = data[i];
          console.log("this new brews:",typeof(this.new_brews));
        }
      }

      // console.log("data",typeof(data));
    });
  }

  // showIng(){

  // }

}
