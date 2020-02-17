import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloWorldComponent implements OnInit {

  @Input() title;

  ngOnInit(): void {
  }

}
