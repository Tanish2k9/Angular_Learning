import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangChildComponent } from './chang-child.component';

describe('ChangChildComponent', () => {
  let component: ChangChildComponent;
  let fixture: ComponentFixture<ChangChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
