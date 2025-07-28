import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTaskComponent } from './course-task.component';

describe('CourseTaskComponent', () => {
  let component: CourseTaskComponent;
  let fixture: ComponentFixture<CourseTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
