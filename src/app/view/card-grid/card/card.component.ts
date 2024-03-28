import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SlotAction} from "../../action-menu/action-menu/action-menu.component";
import {Observable} from "rxjs";

@Component({
  selector: "sbb-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  @Input()
  route?: string | any[];

  @Input()
  icon?: string;

  @Output()
  iconClick = new EventEmitter();

  @Input()
  actions?: Observable<SlotAction[]>;

  openLink() {
    const element: HTMLElement =
      document.getElementById("cardComponentRouterLink") as HTMLElement;
    if (element ){
      element.click();
    }
  }

  stopPropagation(event$: MouseEvent) {
    event$.stopPropagation();
  }
}
