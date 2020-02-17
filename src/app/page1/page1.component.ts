import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div>page1</div>
  `
})
export class Page1Component  {

    constructor(private router: Router) {
        console.log(router);
    }


}
