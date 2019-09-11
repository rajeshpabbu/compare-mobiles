import { Component, OnInit, Input } from "@angular/core";
import { MobileService } from "../mobile.service";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  @Input() mobile;
  constructor(private ms: MobileService) {}

  ngOnInit() {
    //console.log(this.mobile);
  }
  addToCompare(id: number) {
    this.ms.addtoCompareStack(id);
  }
  removeFromCompare(id: string) {
    this.ms.removeFromCompare(id);
  }
  isInCompareList(id: number) {
    return this.ms.compareStack.indexOf(id);
  }
}
