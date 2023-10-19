import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from "./elements/buttons/text/text.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TextComponent],
  template: `
    <app-button-text icon="search" [trailingIcon]="true">Text</app-button-text>
  `,
  styles: [],
})
export class AppComponent {
  title = "material-web-ng";
}
