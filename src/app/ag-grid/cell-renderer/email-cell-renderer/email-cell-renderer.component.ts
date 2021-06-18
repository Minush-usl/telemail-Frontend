import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-email-cell-renderer",
  template: `
    <a [routerLink]="['/mails', this.params.value]">
      <i class="fas fa-chevron-down"></i>
    </a>
  `,
})
export class EmailCellRendererComponent implements ICellRendererAngularComp {
  public params: any;

  constructor() {}

  refresh(params: any): boolean {
    return true;
  }
  agInit(params: any): void {
    this.params = params;
  }
}
