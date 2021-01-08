import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brews: Object = {};

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews =data;
      console.log(this.brews);
    });
  }

  showIng(){

  }

}
