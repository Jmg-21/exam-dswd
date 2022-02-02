import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenaryComponent } from './tenary.component';

describe('TenaryComponent', () => {
  let component: TenaryComponent;
  let fixture: ComponentFixture<TenaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
