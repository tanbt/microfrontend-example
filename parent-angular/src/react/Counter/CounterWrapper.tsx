import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from "./Counter";

@Component({
  selector: "react-counter",
  template: '<span [id]="rootDomID"></span>',
})
export class CounterWrapper
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  private rootDomID: string = "react-counter";

  protected getRootDomNode() {
    return document.getElementById(this.rootDomID) || new HTMLElement();
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Counter), this.getRootDomNode());
    }
  }

  ngOnInit() {}

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.getRootDomNode());
  }
}
