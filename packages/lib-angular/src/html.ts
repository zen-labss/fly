import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

export interface Props {
  content: any;
  lang: String;
  props: any;
}

@Component({
  selector: "html, Html",
  template: `
    <html [attr.lang]="lang">
      {{content}}
    </html>
  `,
})
export class Html {
  @Input() lang: Props["lang"];
  @Input() props: Props["props"];
  @Input() content: Props["content"];
}

@NgModule({
  declarations: [Html],
  imports: [CommonModule],
  exports: [Html],
})
export class HtmlModule {}
