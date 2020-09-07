import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  private isClick = false

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent() {
    if (!this.isClick) {
      alert(1111)
    }

    this.isClick = true
  }
}
