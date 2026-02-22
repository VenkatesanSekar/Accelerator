import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Differentiators } from './differentiators';

describe('Differentiators', () => {
  let component: Differentiators;
  let fixture: ComponentFixture<Differentiators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Differentiators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Differentiators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
