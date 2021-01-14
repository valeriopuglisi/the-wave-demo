import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBannerComponent } from './compare-banner.component';

describe('CompareBannerComponent', () => {
  let component: CompareBannerComponent;
  let fixture: ComponentFixture<CompareBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
