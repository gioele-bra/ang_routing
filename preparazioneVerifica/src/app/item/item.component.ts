import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
routeObs: Observable<ParamMap>;
  apiServiceObs: Observable<Object>;
  food: any;

  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id');
    console.log (id);

    this.apiServiceObs = this.service.getFood(id) ;
    this.apiServiceObs.subscribe((data)=>this.food = data)
  }

    back() : void
    {
        this.location.back();
    }

}
