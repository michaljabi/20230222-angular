import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceDetailsComponent } from './advice-details.component';

describe('AdviceDeatilsComponent', () => {
  let component: AdviceDetailsComponent;
  let fixture: ComponentFixture<AdviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
