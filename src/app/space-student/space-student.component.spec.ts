import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceStudentComponent } from './space-student.component';

describe('SpaceStudentComponent', () => {
  let component: SpaceStudentComponent;
  let fixture: ComponentFixture<SpaceStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
