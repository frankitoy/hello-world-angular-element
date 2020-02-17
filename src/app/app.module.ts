import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { Page1Component } from './page1/page1.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    HelloWorldComponent,
    Page1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: ''
    }
  ],
  entryComponents: [HelloWorldComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(injector: Injector) {
    const customElement = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('app-hello-world',  customElement as any);
  }

  ngDoBootstrap() {
  }
}
