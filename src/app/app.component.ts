import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonTextComponent } from "./elements/buttons/text/text.component";
import "@material/web/button/elevated-button";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/button/text-button";
import "@material/web/button/filled-tonal-button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ButtonTextComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h3>@material/web components</h3>
    <md-filled-button> Filled </md-filled-button>

    <md-outlined-button> Outlined </md-outlined-button>

    <md-elevated-button> Elevated </md-elevated-button>

    <md-filled-tonal-button> Tonal </md-filled-tonal-button>

    <md-text-button> Text </md-text-button>
    <hr />
    <h3>Application Components</h3>
    <app-button-text icon="search">Text</app-button-text>
  `,
  styles: [],
})
export class AppComponent {
  title = "material-web-ng";
}
