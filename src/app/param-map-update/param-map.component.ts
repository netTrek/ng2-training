import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gfk-param-map',
  template: `
    <p>
      param-map Works! ID:= {{this.param_id}}
    </p>
    <a [routerLink]="['/paramMap', 456]">next</a>
  `,
  styles: []
})
export class ParamMapComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  param_id: string | null = null;

  constructor ( private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.subscription = this.route.paramMap
                            .map ( paramMap => paramMap.get ('id') || 'None' )
                            .subscribe( id => this.param_id = id );
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

}
