import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

export interface Props {
  text: any;
  style: any;
}

@Component({
  selector: "button, Button",
  template: `
    <a
      [ngStyle]='{
        border: "2px solid #000",
        borderRadius: "10px",
        padding: "10px"
      }'
    >
      <span>{{text}}</span>
    </a>
  `,
})
export class Button {
  @Input() text: Props["text"];
}

@NgModule({
  declarations: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
