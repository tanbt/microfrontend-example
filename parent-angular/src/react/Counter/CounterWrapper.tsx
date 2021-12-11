import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
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

  @Input() public counter = 5;
  @Output() public onIncrease = new EventEmitter<void>();

  constructor() {
    this.handleIncrease = this.handleIncrease.bind(this);
  }
  public handleIncrease() {
    if (this.onIncrease) {
      this.onIncrease.emit();
      this.render();
    }
  }

  protected getRootDomNode() {
    return document.getElementById(this.rootDomID) || new HTMLElement();
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      const { counter } = this;

      ReactDOM.render(
        <Counter counter={counter} onIncrease={this.handleIncrease} />,
        this.getRootDomNode()
      );
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
