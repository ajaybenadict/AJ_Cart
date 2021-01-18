import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor() {}
  @Output('optionFeature') loadedFeature = new EventEmitter<string>();

  ngOnInit(): void {}
  onSelection(feature: string) {
    this.loadedFeature.emit(feature);
  }
}
