import { TestBed } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";

describe("Component: Alert", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(AlertComponent);
    const component = fixture.componentInstance;

    return { fixture, component };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
  it("should call ngOnInit", () => {
    const { component } = setup();
    component.ngOnInit();
  });
  it("should call close emit", () => {
    const { component } = setup();
    component.onClose();
  });
});
