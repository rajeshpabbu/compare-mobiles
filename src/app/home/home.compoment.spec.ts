/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { HomeComponent } from "./home.component";

describe("Component: Home", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
  });

  it("should create the app", async(() => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as header 'Hello, world!'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.header).toEqual("Hello, world!");
  });

  it("should render title in H1 tag", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Hello, world!");
  });
});
