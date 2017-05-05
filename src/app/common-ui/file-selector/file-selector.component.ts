import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'audi-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  @Input()
  label = 'Datei wählen';

  @Input()
  types = 'image/jpeg';

  constructor() { }

  ngOnInit() {
  }

}
