import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditBookComponent } from './show-edit-book.component';

describe('ShowEditBookComponent', () => {
  let component: ShowEditBookComponent;
  let fixture: ComponentFixture<ShowEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEditBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
