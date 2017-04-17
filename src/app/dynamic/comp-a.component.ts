import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-comp-a',
  template: `
    <p>
      comp-a Works!
    </p>
  `,
  styles: []
})
export class CompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
