import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuuModalComponent } from './auu-modal.component';

describe('AuuModalComponent', () => {
  let component: AuuModalComponent;
  let fixture: ComponentFixture<AuuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
