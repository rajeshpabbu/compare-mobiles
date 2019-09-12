import { TestBed } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";

describe("Component: Alert", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent]
    });
  });

  it("should create the app", () => {
    let fixture = TestBed.createComponent(AlertComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
