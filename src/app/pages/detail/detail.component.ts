import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any;
  // routeState: any;
  // state$: Observable<object>;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private _location: Location
  ) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
      // if (this.routeState) {
      //   this.data.frontEnd = this.routeState.frontEnd ? JSON.parse(this.routeState.frontEnd) : '';
      //   this.data.site = this.routeState.site ? this.routeState.site : '';
      // }
    }
  }

  ngOnInit(): void {
   
  }

  backClicked() {
    this._location.back();
  }

}
