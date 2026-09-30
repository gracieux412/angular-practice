import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing2 } from './testing2';

describe('Testing2', () => {
  let component: Testing2;
  let fixture: ComponentFixture<Testing2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing2],
    }).compileComponents();

    fixture = TestBed.createComponent(Testing2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
