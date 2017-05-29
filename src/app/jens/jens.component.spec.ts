import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JensComponent } from './jens.component';

describe('JensComponent', () => {
  let component: JensComponent;
  let fixture: ComponentFixture<JensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
