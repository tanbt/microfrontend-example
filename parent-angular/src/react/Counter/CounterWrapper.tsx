import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from "./Counter";

const rootDomID: string = "reactCounterWrapperId";

@Component({
  selector: "react-counter",
  template: `<span #${rootDomID}></span>`,
})
export class CounterWrapper
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  @ViewChild(rootDomID, { static: false }) containerRef: ElementRef | undefined;

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

  protected render() {
    if (!this.containerRef || !this.containerRef.nativeElement) return;
    const { counter } = this;
    ReactDOM.render(
      <Counter counter={counter} onIncrease={this.handleIncrease} />,
      this.containerRef.nativeElement
    );
  }

  ngOnInit() {}

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
