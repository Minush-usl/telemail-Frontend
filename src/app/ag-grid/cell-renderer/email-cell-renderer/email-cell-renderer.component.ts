import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-email-cell-renderer',
  template: `
  <button (click)="btnClickedHandler($event)">click me</button>
  `,
  styleUrls: ['./email-cell-renderer.component.scss']
})
export class EmailCellRendererComponent implements ICellRendererAngularComp {

  private params: any;

  constructor() { }
  refresh(params: any): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: any): void {
    this.params = params
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  public btnClickedHandler() {
    this.params.clicked(this.params.value);
  }

}