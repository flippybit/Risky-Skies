import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoCrearComponent } from './modo-crear.component';

describe('ModoCrearComponent', () => {
  let component: ModoCrearComponent;
  let fixture: ComponentFixture<ModoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
