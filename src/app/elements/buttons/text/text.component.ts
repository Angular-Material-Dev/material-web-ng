import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import "@material/web/button/text-button";
import "@material/web/icon/icon";

@Component({
  selector: "app-button-text",
  standalone: true,
  imports: [CommonModule],
  template: `
    <md-text-button
      [attr.trailing-icon]="trailingIcon ? trailingIcon : undefined"
    >
      <md-icon slot="icon" *ngIf="icon">{{ icon }}</md-icon>
      <ng-content></ng-content>
    </md-text-button>
  `,
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextComponent {
  @Input() icon: string | undefined = "";
  @Input() trailingIcon = false;
}
