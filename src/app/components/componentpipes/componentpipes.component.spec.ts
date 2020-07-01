import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentpipesComponent } from './componentpipes.component';

describe('ComponentpipesComponent', () => {
  let component: ComponentpipesComponent;
  let fixture: ComponentFixture<ComponentpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
