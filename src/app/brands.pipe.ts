import { Pipe, PipeTransform } from "@angular/core";
import { MobileService } from "./mobiles/mobile.service";

@Pipe({ name: "getBrand" })
export class BrandsPipe implements PipeTransform {
  constructor(private ms: MobileService) {}

  transform(value: any) {
    const bn = this.ms.getBrand(value)[0];
    return bn ? bn.brandName : "NA";
  }
}
@Pipe({ name: "shortName" })
export class ShortNamePipe implements PipeTransform {
  transform(value: string) {
    return value.length > 22 ? value.substr(0, 20) + " ..." : value;
  }
}
