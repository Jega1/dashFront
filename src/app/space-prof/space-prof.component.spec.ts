import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceProfComponent } from './space-prof.component';

describe('SpaceProfComponent', () => {
  let component: SpaceProfComponent;
  let fixture: ComponentFixture<SpaceProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
