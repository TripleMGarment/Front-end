import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualComponent } from './casual.component';

describe('CasualComponent', () => {
  let component: CasualComponent;
  let fixture: ComponentFixture<CasualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasualComponent]
    });
    fixture = TestBed.createComponent(CasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
