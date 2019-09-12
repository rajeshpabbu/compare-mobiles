import { TestBed } from "@angular/core/testing";
import { LoadingSpinnerComponent } from "./loading-spinner.component";

describe("Component: Loading Spinner", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent]
    });
  });

  it("should create the app", () => {
    let fixture = TestBed.createComponent(LoadingSpinnerComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
