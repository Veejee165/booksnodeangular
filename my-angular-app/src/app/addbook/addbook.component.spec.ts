import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBookComponent } from './addbook.component';


describe('AddbookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookComponent]
    });
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
