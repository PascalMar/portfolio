import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkilsComponent } from './my-skils.component';

describe('MySkilsComponent', () => {
  let component: MySkilsComponent;
  let fixture: ComponentFixture<MySkilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySkilsComponent]
    });
    fixture = TestBed.createComponent(MySkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
