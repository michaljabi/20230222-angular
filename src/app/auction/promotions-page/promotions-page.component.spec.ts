import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsPageComponent } from './promotions-page.component';

describe('PromotionsPageComponent', () => {
  let component: PromotionsPageComponent;
  let fixture: ComponentFixture<PromotionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
