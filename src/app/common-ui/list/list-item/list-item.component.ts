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

  @HostBinding ( 'class.show-as-italic' )
  showAsItalic: boolean = false;

  @HostListener ( 'mouseenter' )
  mouseEnter () {
    this.showAsItalic = true;
  }

  @HostListener ( 'mouseleave' )
  mouseLeave () {
    this.showAsItalic = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
