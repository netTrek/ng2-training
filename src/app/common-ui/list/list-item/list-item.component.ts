import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'avaya-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input ()
  @HostBinding ( 'class.selected' )
  isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
